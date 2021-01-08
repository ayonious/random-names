import React, { useState } from 'react';
import GithubCorner from 'react-github-corner';
import Select, { ValueType } from 'react-select';

import { database } from '../../resources/Database';
import CountryResults from '../CountryResults';
import Greeting from '../Greeting';
import {
  FormWrapper,
  SelectTitleWrapper,
  SelectWrapper,
  SelectItemWrapper,
  CustomSelectStyles,
} from './styles';
import { theme } from '../../../config';

const regions = Object.keys(database);

interface SelectItem {
  label: string;
  value: string;
}
const Dashboard = () => {
  const [selectedCountry, changeSelectedCountry] = useState<string>('Germany');

  const onSelectOption = (event: ValueType<SelectItem, false>) => {
    changeSelectedCountry(event?.value || 'Germany');
  };

  const selectList: SelectItem[] = regions.map((region) => ({
    label: `${database[region].flag} ${region}`,
    value: region,
  }));

  return (
    <div>
      <GithubCorner
        href="https://github.com/ayonious/random-names"
        bannerColor={theme.primaryColor}
      />
      <div>
        <Greeting />
      </div>
      <FormWrapper>
        <SelectWrapper>
          <SelectItemWrapper>
            <Select
              styles={CustomSelectStyles}
              defaultValue={selectList[0]}
              isSearchable={true}
              name="country list"
              options={selectList}
              onChange={(item, others) => onSelectOption(item)}
            />
          </SelectItemWrapper>
          <SelectTitleWrapper>Region</SelectTitleWrapper>
        </SelectWrapper>
        <CountryResults country={selectedCountry} />
      </FormWrapper>
    </div>
  );
};

export default Dashboard;
