const router = require("express").Router();
const { Op } = require("sequelize");
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

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
      const currentConvo = await Conversation.findByPk(conversationId)

      if (!currentConvo) return res.sendStatus(404);

      if (currentConvo.user1Id !== senderId && currentConvo.user2Id !== senderId) {
          return res.sendStatus(403);
      }
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

router.all("/update-read-messages", async (req, res, next) => {
  try {
    console.log('hit this route')

    const userId = req.user.id;
    const { conversationId } = req.body;

    await Message.update({
      read: true,
    }, {
      where: {
        [Op.and]: [
          {conversationId: conversationId},
          { senderId: {
            [Op.not]: userId
          }},
        ]
      }
    })

    const messages = await Message.findAll({
      where: {
        [Op.and]: [
          {conversationId: conversationId},
          { senderId: {
            [Op.not]: userId
          }},
        ]
      }
    })

    console.log(messages)

    res.json({messages, conversationId})


//   //   queryInterface.bulkUpdate('roles', {
//   //     label: 'admin',
//   //   }, {
//   //     userType: 3,
//   //   },
//   // );

  } catch(error) {
    next(error);
  }

});

module.exports = router;
