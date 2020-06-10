import Button from '@material-ui/core/Button';
import React from 'react';

import { CenteredFlexDevWrapper } from './styles';

interface Props {
  title: string;
  onClick: () => void;
}

const CustomButton = (props: Props) => {
  return (
    <CenteredFlexDevWrapper>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.title}
      </Button>
    </CenteredFlexDevWrapper>
  );
};

export default CustomButton;
