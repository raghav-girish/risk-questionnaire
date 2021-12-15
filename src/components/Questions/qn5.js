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

const Qn5 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 5) Have you planned for major life stage expenses like your
            child’s higher education, marriage, purchase of house, medical /
            hospitalisation, retirement etc.?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn5">
              <FormControlLabel
                value="I have no separate provision for such expenses "
                control={<Radio color="primary" />}
                label="I have no separate provision for such expenses "
              />
              <Line />
              <FormControlLabel
                value="I have made some provision for such expenses "
                control={<Radio color="primary" />}
                label="I have made some provision for such expenses "
              />
              <Line />
              <FormControlLabel
                value="Yes, I have a separate provision for such expenses "
                control={<Radio color="primary" />}
                label="Yes, I have a separate provision for such expenses "
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn5;
