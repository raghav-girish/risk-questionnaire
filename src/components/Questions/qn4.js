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

const Qn4 = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10", marginBottom: "10" }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.questionTypography}>
            Qn. 4) Your current investment portfolio comprises of:
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="qn4">
              <FormControlLabel
                value="Mainly money market, short-term funds, corporate / bank deposits and bond"
                control={<Radio color="primary" />}
                label="Mainly money market, short-term funds, corporate / bank deposits and bond"
              />
              <Line />
              <FormControlLabel
                value="Mainly debt market instruments, gold and some portion in blue-chip stocks "
                control={<Radio color="primary" />}
                label="Mainly debt market instruments, gold and some portion in blue-chip stocks "
              />
              <Line />
              <FormControlLabel
                value="A mix of debt instruments, blue-chip / aggressive stocks, capital protected and direct equity "
                control={<Radio color="primary" />}
                label="A mix of debt instruments, blue-chip / aggressive stocks, capital protected and direct equity "
              />
              <Line />
              <FormControlLabel
                value="Mainly aggressive stock, high-yield debt funds, (small and midcap stocks and income funds)
            private equity and real estate"
                control={<Radio color="primary" />}
                label="Mainly aggressive stock, high-yield debt funds, (small and midcap stocks and income funds)
            private equity and real estate"
              />
              <Line />
              <FormControlLabel
                value="Mostly speculative or high-risk investments (aggressive high-risk funds, options, real estate,
               leveraged positions, etc.)"
                control={<Radio color="primary" />}
                label="Mostly speculative or high-risk investments (aggressive high-risk funds, options, real estate,
               leveraged positions, etc.)"
              />
              <Line />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
export default Qn4;
