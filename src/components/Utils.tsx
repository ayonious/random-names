import Button from '@material-ui/core/Button';
import * as React from 'react';

import { CenteredFlexDevWrapper } from '../styles/styles';

export function CustomButton(props: any) {
  return (
    <CenteredFlexDevWrapper>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.title}
      </Button>
    </CenteredFlexDevWrapper>
  );
}

export function Greeting() {
  return (
    <CenteredFlexDevWrapper>
      <h1> Start Shuffling! </h1>
    </CenteredFlexDevWrapper>
  );
}
