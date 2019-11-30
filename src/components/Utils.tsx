import * as React from 'react';
import Button from '@material-ui/core/Button';

const style = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
};

export function CustomButton(props: any) {
  return (
    <div style={style}>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.title}
      </Button>
    </div>
  );
}

export function Greeting() {
  return (
    <div style={style}>
      <h1> Start Shuffling! </h1>
    </div>
  );
}
