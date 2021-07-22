import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    },
    userAccessButton: {
      color: "#3A8DFF",
      letterSpacing: 0,
      textTransform: "none",
    }, loginSignup: {
        color: "grey",
        fontSize: 12,
    },
    phrase: {
      color: "white",
      fontSize: "20px"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
        fontSize: 14,
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  },
});
