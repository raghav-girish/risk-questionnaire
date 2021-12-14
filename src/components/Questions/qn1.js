import React from "react";
import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  CardContent, Card
} from "@material-ui/core";
import useStyles from "../questionnairestyles";
import Line from '../colouredline';

const Qn1 = () => {
  const classes = useStyles();
  return (
    
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}><CardContent>
      <Typography className={classes.questionTypography}>
        Qn1.Which of the following best describes your current stage of life?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="qn1">
          <FormControlLabel
            value="Single"
            control={<Radio color="primary" />}
            label="Single"
          />
          <Line />
          <FormControlLabel
            value="Single with dependant parents"
            control={<Radio color="primary" />}
            label="Single with dependant parents"
          />
          <Line />
          <FormControlLabel
            value="Young family"
            control={<Radio color="primary" />}
            label="Young family"
          />
          <Line />
          <FormControlLabel
            value="Mature Family"
            control={<Radio color="primary" />}
            label="Mature Family"
          />
          <Line />
          <FormControlLabel
            value="Nearing retirement"
            control={<Radio color="primary" />}
            label="Nearing retirement"
          />
          <Line />
          <FormControlLabel
            value="Retired"
            control={<Radio color="primary" />}
            label="Retired"
          />
          <Line />
        </RadioGroup>
      </FormControl>
      </CardContent></Card>
    </div>
  );
};
export default Qn1;
