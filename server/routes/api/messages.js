const router = require("express").Router();
const { Op } = require("sequelize");
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    const decodedToken = jwt.verify(token, process.env.SESSION_SECRET);
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}

const validateConversation = async (conversationId, matchId) => {
  const currentConvo = await Conversation.findByPk(conversationId);

  if (!currentConvo) return res.sendStatus(404);

  if (currentConvo.user1Id !== matchId && currentConvo.user2Id !== matchId) {
    return res.sendStatus(403);
  }
};

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender } = req.body;

    // if we already know conversation id, we can save time and just add it to message and return
    if (conversationId) {
      //Issue 1 exploit solution: if conversation exists, validate that the current senderId is in one of the userId columns
      await validateConversation(conversationId, senderId);
      const message = await Message.create({ senderId, text, conversationId });
      return res.json({ message, sender });
    }

    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

router.put("/updated-messages", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { conversationId } = req.body;

    await validateConversation(conversationId, userId);

    await Message.update(
      {
        read: true,
      },
      {
        where: {
          [Op.and]: [
            { conversationId: conversationId },
            {
              senderId: {
                [Op.not]: userId,
              },
            },
            { read: false },
          ],
        },
      }
    );

    res.status(200).json({ conversationId });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
