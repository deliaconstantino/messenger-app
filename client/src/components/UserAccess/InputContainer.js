import { Grid, FormControl } from "@material-ui/core";
import InputField from "./InputField";

const InputContainer = (props) => {
  const { inputField } = props;
  return (
    <Grid>
      <FormControl>
        <InputField inputFields={inputField} />
      </FormControl>
    </Grid>
  );
};

export default InputContainer;
