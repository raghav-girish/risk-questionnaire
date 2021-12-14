import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import useStyles from "./appbarstyles";

const Appbarheader = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Typography style={{ fontSize: "30px", marginLeft: "15px" }}>
          Risk Assessment Questionnaire
        </Typography>
      </AppBar>
    </div>
  );
};
export default Appbarheader;
