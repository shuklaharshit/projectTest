import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Phase1Content(props) {
  //state to increment Numbers
  const [incrementnum, setIncrementnum] = useState(0);

  //button 1 function
  const button1 = () => {
    //incrementing number by 1 digit
    let currentStateNumber = incrementnum;
    const updatedNum = currentStateNumber + 1;
    setIncrementnum(updatedNum);
  };

  //button 2 function
  const button2 = () => {
    //incrementing number by 2 digit
    let currentStateNumber = incrementnum;
    const updatedNum = currentStateNumber + 2;
    setIncrementnum(updatedNum);
  };

  //button 3 function
  const button3 = () => {
    //incrementing number by 3 digit
    let currentStateNumber = incrementnum;
    const updatedNum = currentStateNumber + 3;
    setIncrementnum(updatedNum);
  };

  //resenting Counter function
  const resetcounter = () => {
    setIncrementnum(0);
  };
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5rem",
            marginRight: "5rem",
          }}
        >
          <Typography
            align="center"
            style={{
              fontFamily: "Bungee Shade",
              fontSize: "40px",
              color: "white",
            }}
          >
            Phase 1
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5rem",
            marginRight: "5rem",
          }}
        >
          <Typography
            align="center"
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "40px",
              color: "white",
            }}
          >
            {incrementnum}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* awesome buttons */}

          <AwesomeButton
            type="primary"
            style={{
              fontSize: "1.5rem",
              height: "4rem",
              width: "9rem",
            }}
            ripple
            onPress={() => {
              // do something
              button1();
            }}
          >
            Button 1
          </AwesomeButton>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* awesome buttons */}

          <AwesomeButton
            type="primary"
            ripple
            style={{
              fontSize: "1.5rem",
              height: "4rem",
              width: "9rem",
            }}
            onPress={() => {
              // do something
              button2();
            }}
          >
            Button 2
          </AwesomeButton>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* awesome buttons */}

          <AwesomeButton
            type="primary"
            ripple
            style={{
              fontSize: "1.5rem",
              height: "4rem",
              width: "9rem",
            }}
            onPress={() => {
              // do something
              button3();
            }}
          >
            Button 3
          </AwesomeButton>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AwesomeButton
            type="secondary"
            ripple
            style={{
              fontSize: "1.5rem",
              height: "4rem",
              width: "9rem",
            }}
            onPress={() => {
              // do something
              props.setCurrentState("");
            }}
          >
            GO BACK
          </AwesomeButton>
          {/* awesome buttons */}
          <AwesomeButton
            type="secondary"
            ripple
            style={{
              fontSize: "1.5rem",
              height: "4rem",
              width: "9rem",
            }}
            onPress={() => {
              // do something
              resetcounter();
            }}
          >
            RESET
          </AwesomeButton>
        </Grid>
      </Grid>
    </>
  );
}
