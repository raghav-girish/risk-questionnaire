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

const Qn12 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 12) Assuming an inflation rate of 5-7% p.a. over a medium to
            long-term horizon (3 to 5yr+) what return do you reasonably expect
            from your investments?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn12">
              <FormControlLabel
                value="Inflation rate plus 2 - 4% p.a. "
                control={<Radio color="primary" />}
                label="Inflation rate plus 2 - 4% p.a. "
              />
              <Line />
              <FormControlLabel
                value="Inflation rate plus 5 - 7% p.a. "
                control={<Radio color="primary" />}
                label="Inflation rate plus 5 - 7% p.a. "
              />
              <Line />
              <FormControlLabel
                value="Inflation rate plus 8 - 10% p.a. "
                control={<Radio color="primary" />}
                label="Inflation rate plus 8 - 10% p.a. "
              />
              <Line />
              <FormControlLabel
                value="Inflation rate plus 11 - 15% p.a. "
                control={<Radio color="primary" />}
                label="Inflation rate plus 11 - 15% p.a. "
              />
              <Line />
              <FormControlLabel
                value="More than 15% p.a. over inflation rate "
                control={<Radio color="primary" />}
                label="More than 15% p.a. over inflation rate "
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn12;
