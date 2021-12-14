import React from "react";
import {
  Card,
  CardContent,
} from "@material-ui/core";
import useStyles from "./questionnairestyles";
import Qn1 from './qn1';
import Qn2 from "./qn2";

const Questions = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          {/* <Toolbar className={classes.toolBar1}>
            <Typography
              style={{ fontSize: "16px", marginLeft: "15px", color: "white" }}
            >
              Questions
            </Typography>
          </Toolbar> */}
          <Qn1 />
          <Qn2 />
        </CardContent>
      </Card>
    </div>
  );
};
export default Questions;
