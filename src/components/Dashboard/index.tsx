import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { ValueType } from 'react-select';
import React, { useState } from 'react';

import { database } from '../../resources/Database';
import { FormWrapper } from './styles';
import CountryResults from '../CountryResults';
import Greeting from '../Greeting';

const regions = Object.keys(database);

interface Props {}
interface SelectItem {
  label: string;
  value: string;
}
interface State {
  selectedCountry: string;
}
const Dashboard = () => {
  const [selectedCountry, changeSelectedCountry] = useState('Germany');

  const onSelectOption = (event: ValueType<SelectItem, false>) => {
    changeSelectedCountry(event?.value || 'Germany');
  };

  const selectList: SelectItem[] = regions.map((region) => ({
    label: `${database[region].flag} ${region}`,
    value: region,
  }));

  return (
    <div>
      <div>
        <Greeting />
      </div>
      <FormWrapper>
        <FormControl className="myFormClass">
          <Select
            defaultValue={selectList[0]}
            isSearchable={true}
            name="country list"
            options={selectList}
            onChange={(item, others) => onSelectOption(item)}
          />
          <FormHelperText>Region</FormHelperText>
        </FormControl>
        <CountryResults country={selectedCountry} />
      </FormWrapper>
    </div>
  );
};

export default Dashboard;
