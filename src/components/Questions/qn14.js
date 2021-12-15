import React from "react";
import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import useStyles from "../questionnairestyles";
import Line from "../colouredline";

const Qn14 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 14) Do you leverage your investments?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn14">
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <Line />
              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#3949AB",
            width: "60%",
            marginLeft: "20%",
            marginRight: "20%",
            marginBottom: "20px",
          }}
        >
          <Typography style={{ color: "white", fontSize:"17px", fontWeight:"bold" }}>Submit</Typography>
        </Button>
      </Card>
    </div>
  );
};
export default Qn14;
