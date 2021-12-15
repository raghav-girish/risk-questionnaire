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

const Qn3 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 3) Which of the following best describes your purpose of
            investing?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn3">
              <FormControlLabel
                value="To protect capital "
                control={<Radio color="primary" />}
                label="To protect capital "
              />
              <Line />
              <FormControlLabel
                value="To protect capital and earn regular income "
                control={<Radio color="primary" />}
                label="To protect capital and earn regular income "
              />
              <Line />
              <FormControlLabel
                value="To grow capital"
                control={<Radio color="primary" />}
                label="To grow capital"
              />
              <Line />
              <FormControlLabel
                value="To grow capital and generate regular income "
                control={<Radio color="primary" />}
                label="To grow capital and generate regular income "
              />
              <Line />
              <FormControlLabel
                value="To build long-term wealth "
                control={<Radio color="primary" />}
                label="To build long-term wealth "
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn3;
