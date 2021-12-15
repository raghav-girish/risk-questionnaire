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

const Qn8 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 8) To meet foreseen and unforeseen circumstances you need to
            keep ----- of your investments in liquid instruments?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn8">
              <FormControlLabel
                value="More than 50% "
                control={<Radio color="primary" />}
                label="More than 50% "
              />
              <Line />
              <FormControlLabel
                value="25% - 50%"
                control={<Radio color="primary" />}
                label="25% - 50%"
              />
              <Line />
              <FormControlLabel
                value=" 10% - 25% "
                control={<Radio color="primary" />}
                label=" 10% - 25% "
              />
              <Line />
              <FormControlLabel
                value="Below 10%"
                control={<Radio color="primary" />}
                label="Below 10%"
              />
              <Line />
              <FormControlLabel
                value="None of my investments"
                control={<Radio color="primary" />}
                label="None of my investments"
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn8;
