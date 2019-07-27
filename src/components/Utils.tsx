import * as React from "react";
import Button from "@material-ui/core/Button";

interface GreetingProps {
  isLoggedIn: boolean;
}

export function CustomButton(props: any) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <div style={style}>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.title}
      </Button>
    </div>
  );
}

export function Greeting(props: GreetingProps) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <div style={style}>
      {props.isLoggedIn && <h1> Start Shuffling! </h1>}
      {!props.isLoggedIn && <h1> Welcome to Random Names! </h1>}
    </div>
  );
}
