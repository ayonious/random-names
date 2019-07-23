import * as React from "react";
import Button from "@material-ui/core/Button";

export function CustomButton(props) {
  return (
    <div onClick={props.onClick} align={"middle"}>
      <Button variant="contained" color="primary">
        {props.title}
      </Button>
    </div>
  );
}

export function Greeting(props) {
  return (
    <div align={"middle"}>
      {props.isLoggedIn && <h1> Start Shuffling! </h1>}
      {!props.isLoggedIn && <h1> Welcome to Random Names! </h1>}
    </div>
  );
}
