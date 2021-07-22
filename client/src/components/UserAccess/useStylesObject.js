import { makeStyles } from "@material-ui/core/styles";

export const useStylesForm = makeStyles((theme) => ({
  formGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2, 0),
  },
}));

export const useStylesUserAccess = makeStyles((theme) => ({
  image: {
    backgroundImage: "url(bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center-top",
    minHeight: "100vh",
  },
  backgroundColor: {
    backgroundSize: "cover",
    height: "100%",
    backgroundImage: "linear-gradient(#3A8DFF 0%, #86B9FF 100%)",
    opacity: "0.85",
  },
  buttonGrid: {
    display: "flex",
    margin: theme.spacing(1, -3),
    flexDirection: "row",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1, -1),
    },
  },
  text: {
    ...theme.typography.loginSignup,
    margin: theme.spacing(2, 2),
  },

  button: {
    ...theme.typography.userAccessButton,
    padding: theme.spacing(1, 6),
    boxShadow: "1px 2px 10px #d3d3d3",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 3),
    },
  },
  phraseGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "75vh",
    position: "relative",
  },
  formContainer: {
    display: "flex",
    direction: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(6, 0),
    },
    margin: theme.spacing(12, 0),
  },
}));
