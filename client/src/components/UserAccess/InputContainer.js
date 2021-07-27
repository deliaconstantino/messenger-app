import { Grid, FormControl } from "@material-ui/core";
import InputField from "./InputField";

const InputContainer = ({ inputField }) => {
  return (
    <Grid>
      <FormControl>
        <InputField inputFields={inputField} />
      </FormControl>
    </Grid>
  );
};

export default InputContainer;
