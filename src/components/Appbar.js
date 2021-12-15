import React from "react";
import { Typography, Card } from "@material-ui/core";
import useStyles from "./appbarstyles";

const Appbarheader = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.appBar} position="fixed">
        <Typography style={{ fontSize: "30px", marginLeft: "15px", color:"white" }}>
          Risk Assessment Questionnaire
        </Typography>
      </Card>
    </div>
  );
};
export default Appbarheader;
