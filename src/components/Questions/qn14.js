import React from "react";
import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import useStyles from "../questionnairestyles";
import Line from "../colouredline";

const Qn14 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Typography className={classes.questionTypography}>
        Qn. 14) Do you leverage your investments?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="qn14">
          <FormControlLabel
            value="Yes"
            control={<Radio color="primary" />}
            label="Yes"
          />
          <Line />
          <FormControlLabel
            value="No"
            control={<Radio color="primary" />}
            label="No"
          />
          <Line />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Qn14;
