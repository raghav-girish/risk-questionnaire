import React from "react";
import { Grid, TextField, Card, CardContent, Button } from "@material-ui/core";
import useStyles from "./questionnairestyles";

const PersonalDetails = () => {
  const uploadFaculty = (e) => {
    const FIRST_NAME = e.taret.F_NAME.value;
    const MIDDLE_NAME = e.taret.M_NAME.value;
    const LAST_NAME = e.taret.L_NAME.value;
    const MOBILE_NO = e.taret.MOB_NO.value;
    const MAIL_ID = e.taret.MAIL.value;
    console.log(FIRST_NAME, MIDDLE_NAME, LAST_NAME, MOBILE_NO, MAIL_ID);
  };

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <TextField
                id="fname"
                label="First Name"
                variant="standard"
                style={{ width: "100%" }}
                name="F_NAME"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="mname"
                label="Middle Name"
                variant="standard"
                style={{ width: "100%" }}
                name="M_NAME"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="lname"
                label="Last Name"
                variant="standard"
                style={{ width: "100%" }}
                name="L_NAME"
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} style={{ marginTop: "15px" }}>
            <Grid item xs={12} md={4}>
              <TextField
                id="dob"
                label="Date of Birth"
                type="date"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="mobile"
                label="Mobile No."
                variant="standard"
                style={{ width: "100%" }}
                name="MOB_NO"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                style={{ width: "100%" }}
                name="EMAIL"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" 
          //onClick={uploadFaculty}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default PersonalDetails;
