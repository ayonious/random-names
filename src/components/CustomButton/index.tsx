import Button from '@mui/material/Button';
import React from 'react';

import { CenteredFlexDevWrapper } from './styles';

interface Props {
  title: string;
  onClick: () => void;
}

const CustomButton = (props: Props) => (
  <CenteredFlexDevWrapper>
    <Button
      variant="contained"
      color="primary"
      onClick={props.onClick}
      data-testid="shuffle-button"
    >
      {props.title}
    </Button>
  </CenteredFlexDevWrapper>
);

export default CustomButton;
