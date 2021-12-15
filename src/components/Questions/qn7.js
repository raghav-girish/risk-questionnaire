import React from "react";
import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
} from "@material-ui/core";
import useStyles from "../questionnairestyles";
import Line from "../colouredline";

const Qn7 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 7) Is your family sufficiently secured to face any unforeseen
            eventualities?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn7">
              <FormControlLabel
                value="Along with life insurance coverage for self, I have insured all my major assets (like house, vehicle
               etc.) "
                control={<Radio color="primary" />}
                label="Along with life insurance coverage for self, I have insured all my major assets (like house, vehicle
               etc.) "
              />
              <Line />
              <FormControlLabel
                value="I have taken enough life insurance cover for self and my family "
                control={<Radio color="primary" />}
                label="I have taken enough life insurance cover for self and my family "
              />
              <Line />
              <FormControlLabel
                value="I have not taken enough life insurance coverage "
                control={<Radio color="primary" />}
                label="I have not taken enough life insurance coverage "
              />
              <Line />
              <FormControlLabel
                value="I have not taken any insurance coverage "
                control={<Radio color="primary" />}
                label="I have not taken any insurance coverage"
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn7;
