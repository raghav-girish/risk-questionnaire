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

const Qn6 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Typography className={classes.questionTypography}>
        Qn. 6) When do you plan to start withdrawing money from your investments
        for major needs? (other than provisions made as mentioned in Question 5)
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="qn6">
          <FormControlLabel
            value="Within 1 year"
            control={<Radio color="primary" />}
            label="Within 1 year"
          />
          <Line />
          <FormControlLabel
            value="Between 1 and 3 years "
            control={<Radio color="primary" />}
            label="Between 1 and 3 years "
          />
          <Line />
          <FormControlLabel
            value="Between 3 and 5 years "
            control={<Radio color="primary" />}
            label="Between 3 and 5 years "
          />
          <Line />
          <FormControlLabel
            value="Between 5 and 10 years"
            control={<Radio color="primary" />}
            label="Between 5 and 10 years"
          />
          <Line />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Qn6;
