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

const Qn2 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Typography className={classes.questionTypography}>
        Qn2.How familiar are you with financial markets?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="qn2">
          <FormControlLabel
            value="I have no knowledge "
            control={<Radio color="primary" />}
            label="I have no knowledge "
          />
          <Line />
          <FormControlLabel
            value="I have basic knowledge and little experience with investment "
            control={<Radio color="primary" />}
            label="I have basic knowledge and little experience with investment "
          />
          <Line />
          <FormControlLabel
            value="I have a fair amount of knowledge and investment experience "
            control={<Radio color="primary" />}
            label="I have a fair amount of knowledge and investment experience "
          />
          <Line />
          <FormControlLabel
            value="I have considerable knowledge and comfortable with most investment avenues"
            control={<Radio color="primary" />}
            label="I have considerable knowledge and comfortable with most investment avenues"
          />
          <Line />
          <FormControlLabel
            value="I have extensive knowledge of and experience in investing in different asset classes"
            control={<Radio color="primary" />}
            label="I have extensive knowledge of and experience in investing in different asset classes"
          />
          <Line />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Qn2;
