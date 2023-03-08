import Card from '@mui/material/Card';
import React, { useState } from 'react';

import { CountryName, database } from '../../resources/Database';
import { CardWrapper } from './styles';
import CustomButton from '../CustomButton';

interface Props {
  country: CountryName;
}

const CountryResults = (props: Props) => {
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
        <Card data-testid="name-card" square={true}>
          {currentName}
        </Card>
      </CardWrapper>
      <br />
      <div>
        <CustomButton onClick={handleShuffle} title={'Shuffle'} />
      </div>
    </div>
  );
};

export default CountryResults;
