import { makeStyles } from "@material-ui/core/styles";

export const useStylesForm = makeStyles((theme) => ({
  formGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2, 0),
  },
}));

// export default useStyles;
