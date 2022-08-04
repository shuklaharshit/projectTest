import React from "react";
import { Grid, Typography } from "@mui/material";
import Phase2 from "./Phase2";
import Phase1 from "./Phase1";

export default function Switch(props) {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5rem",
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
            Demo Assignment
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
          <Phase1 setCurrentState={props.setCurrentState} />
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
          <Phase2 setCurrentState={props.setCurrentState} />
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
          <Typography
            align="center"
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "20px",
              color: "white",
            }}
          >
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Made With 💗 By {<br />} Harshit Shukla
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
