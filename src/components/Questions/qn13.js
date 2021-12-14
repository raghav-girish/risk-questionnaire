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

const Qn13 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Typography className={classes.questionTypography}>
        Qn. 13) f your investment in a particular stock falls by 25% and there
        is no change in the fundamentals of the company (assuming that your
        circumstances and conviction about that stock has not changed), you
        will:
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="qn13">
          <FormControlLabel
            value="Not trade in stocks "
            control={<Radio color="primary" />}
            label="Not trade in stocks "
          />
          <Line />
          <FormControlLabel
            value="Sell all your holdings in that stock "
            control={<Radio color="primary" />}
            label="Sell all your holdings in that stock "
          />
          <Line />
          <FormControlLabel
            value="Sell part of your holdings in that stock "
            control={<Radio color="primary" />}
            label="Sell part of your holdings in that stock "
          />
          <Line />
          <FormControlLabel
            value="Hold in order to get better returns"
            control={<Radio color="primary" />}
            label="Hold in order to get better returns"
          />
          <Line />
          <FormControlLabel
            value="Buy more of the stock"
            control={<Radio color="primary" />}
            label="Buy more of the stock"
          />
          <Line />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Qn13;
