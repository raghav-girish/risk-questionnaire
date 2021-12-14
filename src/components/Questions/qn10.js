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

const Qn10 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Typography className={classes.questionTypography}>
        Qn. 10) How will you best describe your investment behaviour?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="qn10">
          <FormControlLabel
            value="I feel comfortable with investments that involve lower risk and generate lower but consistent
            returns year-to-year "
            control={<Radio color="primary" />}
            label="I feel comfortable with investments that involve lower risk and generate lower but consistent
            returns year-to-year "
          />
          <Line />
          <FormControlLabel
            value="I am willing to withstand minor fluctuations in my portfolio but prefer to be invested in less risky
            investments"
            control={<Radio color="primary" />}
            label="I am willing to withstand minor fluctuations in my portfolio but prefer to be invested in less risky
            investments"
          />
          <Line />
          <FormControlLabel
            value="I seek moderate capital growth over a long-term period with short-term fluctuations, but averse
            to taking high risks "
            control={<Radio color="primary" />}
            label="I seek moderate capital growth over a long-term period with short-term fluctuations, but averse
            to taking high risks "
          />
          <Line />
          <FormControlLabel
            value="I seek substantial investment returns, willing to accept occasional short-term declines"
            control={<Radio color="primary" />}
            label="I seek substantial investment returns, willing to accept occasional short-term declines"
          />
          <Line />
          <FormControlLabel
            value=" I seek potentially high investment returns, willing to accept higher risks including loss of capital "
            control={<Radio color="primary" />}
            label=" I seek potentially high investment returns, willing to accept higher risks including loss of capital "
          />
          <Line />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Qn10;
