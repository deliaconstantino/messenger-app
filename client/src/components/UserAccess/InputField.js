import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("xs")]: {
      minWidth: "250px",
      padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "400px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "500px",
    },
  }
}));

const InputField= props => {
  const classes = useStyles();
  const { ariaLabel, label, name, type } = props;

  if (props.inputProps) {
    return (
      <TextField
        aria-label={ariaLabel}
        label={label}
        name={name}
        type={type}
        fullWidth
        required
        className={classes.input}
        inputProps={props.inputProps}
      />
    )
  } else {
    return (
      <TextField
        aria-label={ariaLabel}
        label={label}
        name={name}
        type={type}
        fullWidth
        required
        className={classes.input}
      />
    )
  }

}

export default InputField;
