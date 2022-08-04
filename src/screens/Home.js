import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Phase1Content from "./Phase1Content";
import Phase2Content from "./Phase2Content";
import Switch from "./Switch";

export default function Home() {
  const [currentState, setCurrentState] = useState("");
  //Home Page
  return (
    <>
      {/* select phase by clicking button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          overflowY: "scroll",
        }}
      >
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              xl: 800,
            },
            height: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              xl: 500,
            },
            backgroundColor: "primary.main",
            borderRadius: {
              xs: "0px",
              sm: "0px",
              md: "0px",
              xl: "25px",
            },
            overflowY: "scroll",
          }}
        >
          {/* Importing Main Component */}
          {currentState == "" ? (
            <Switch setCurrentState={setCurrentState} />
          ) : currentState == "phase1" ? (
            <Phase1Content setCurrentState={setCurrentState} />
          ) : currentState == "phase2" ? (
            <Phase2Content setCurrentState={setCurrentState} />
          ) : (
            <Switch />
          )}
        </Card>
      </div>
    </>
  );
}
