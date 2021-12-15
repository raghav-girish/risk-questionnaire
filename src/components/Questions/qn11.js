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

const Qn11 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 11) You will be most comfortable investing in Portfolio... The
            table shows the worst and the best one year return of five
            hypothetical investment plans:
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn11">
              <FormControlLabel
                value="Option A"
                control={<Radio color="primary" />}
                label="Option A"
              />
              <Line />
              <FormControlLabel
                value="Option B"
                control={<Radio color="primary" />}
                label="Option B"
              />
              <Line />
              <FormControlLabel
                value="Option C"
                control={<Radio color="primary" />}
                label="Option C"
              />
              <Line />
              <FormControlLabel
                value="Option D"
                control={<Radio color="primary" />}
                label="Option D"
              />
              <Line />
              <FormControlLabel
                value="Option E"
                control={<Radio color="primary" />}
                label="Option E"
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn11;
