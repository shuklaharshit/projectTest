import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Phase1(props) {
  return (
    <>
      <AwesomeButton
        ripple
        size="large"
        type="primary"
        style={{
          fontFamily: "Bungee Shade",
          fontSize: "2.5rem",
          height: "8rem",
          width: "15rem",
        }}
        onPress={() => {
          // do something with
          console.log("phase 1");
          props.setCurrentState("phase1");
        }}
      >
        Phase 1
      </AwesomeButton>
    </>
  );
}
