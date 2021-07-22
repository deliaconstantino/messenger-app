import { Grid, FormControl, FormHelperText} from "@material-ui/core";
import InputField from "./InputField";

const InputContainer = props => {
  // console.log(props)

  const { inputField } = props;
    return (
      <Grid>
        <FormControl>
          <InputField inputFields={inputField} />
        </FormControl>
      </Grid>
    )

}

export default InputContainer;
