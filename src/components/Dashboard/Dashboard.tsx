import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { useState } from 'react';

import { database } from '../../resources/Database';
import { FormWrapper } from './styles';
import CountryReults from '../CountryResults/CountryResults';
import Greeting from '../Greeting/Greeting';

const regions = Object.keys(database);

interface Props {}

interface State {
  selectedCountry: string;
}
const Dashboard = () => {
  const [selectedCountry, changeSelectedCountry] = useState('Germany');

  const onSelectOption = (event: any) => {
    changeSelectedCountry(event.target.value);
  };

  const selectList = regions.map((region) => (
    <MenuItem key={region} value={region}>
      {database[region].flag} {region}
    </MenuItem>
  ));
  return (
    <div>
      <div>
        <Greeting />
      </div>
      <FormWrapper>
        <FormControl className="myFormClass">
          <Select
            value={selectedCountry}
            onChange={onSelectOption}
            autoWidth={false}
          >
            {selectList}
          </Select>
          <FormHelperText>Region</FormHelperText>
        </FormControl>
        <CountryReults country={selectedCountry} />
      </FormWrapper>
    </div>
  );
};

export default Dashboard;
