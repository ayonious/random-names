import Card from '@material-ui/core/Card';
import React, { useState } from 'react';

import { database } from '../../resources/Database';
import { CardWrapper } from './styles';
import CustomButton from '../CustomButton/CustomButton';

interface Props {
  country: string;
}

const CountryReults = (props: Props) => {
  const [currentName, changeName] = useState('');

  const handleShuffle = () => {
    const index = Math.floor(
      Math.random() * Object.keys(database[props.country].names).length
    );
    const name = database[props.country].names[index];
    changeName(name);
  };

  return (
    <div>
      <br />
      <CardWrapper>
        <Card square={true}> {currentName} </Card>
      </CardWrapper>
      <br />
      <div>
        <CustomButton onClick={handleShuffle} title={'Shuffle'} />{' '}
      </div>
    </div>
  );
};

export default CountryReults;
