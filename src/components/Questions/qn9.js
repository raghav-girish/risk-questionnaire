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

const Qn9 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 9) If your investment turns bad due to global economic
            melt-down, for how long would you be prepared to see your investment
            performing poorly before getting worried and / or liquidating it?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn9">
              <FormControlLabel
                value="Less than 3 months "
                control={<Radio color="primary" />}
                label="Less than 3 months "
              />
              <Line />
              <FormControlLabel
                value="Up to 6 months"
                control={<Radio color="primary" />}
                label="Up to 6 months"
              />
              <Line />
              <FormControlLabel
                value="Up to 12 months "
                control={<Radio color="primary" />}
                label="Up to 12 months "
              />
              <Line />
              <FormControlLabel
                value="Up to 2 years "
                control={<Radio color="primary" />}
                label="Up to 2 years "
              />
              <Line />
              <FormControlLabel
                value="Up to 3 years or more"
                control={<Radio color="primary" />}
                label="Up to 3 years or more "
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn9;
