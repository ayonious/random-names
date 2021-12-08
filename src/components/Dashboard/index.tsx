import React, { useState } from 'react';
import GithubCorner from 'react-github-corner';
import Select, { SingleValue } from 'react-select';

import { database } from '../../resources/Database';
import CountryResults from '../CountryResults';
import Greeting from '../Greeting';
import {
  FormWrapper,
  SelectTitleWrapper,
  SelectWrapper,
  SelectItemWrapper,
  CustomSelectStyles,
  PageWrapper,
} from './styles';
import { theme } from '../../../config';

const regions = Object.keys(database);

interface SelectItem {
  label: string;
  value: string;
}

const GithubCornerPart = () => (
  <GithubCorner
    href="https://github.com/ayonious/random-names"
    bannerColor={theme.primaryColor}
  />
);

const Dashboard = () => {
  const [selectedCountry, changeSelectedCountry] = useState<string>('Germany');

  const onSelectOption = (event: SingleValue<SelectItem>) => {
    changeSelectedCountry(event?.value || 'Germany');
  };

  const selectList: SelectItem[] = regions.map((region) => ({
    label: `${database[region].flag} ${region}`,
    value: region,
  }));

  return (
    <PageWrapper>
      <Greeting />
      <FormWrapper>
        <SelectWrapper>
          <SelectItemWrapper>
            <Select
              styles={CustomSelectStyles}
              defaultValue={selectList[0]}
              isSearchable={true}
              name="country list"
              options={selectList}
              onChange={(item: SingleValue<SelectItem>) => onSelectOption(item)}
            />
          </SelectItemWrapper>
          <SelectTitleWrapper>Region</SelectTitleWrapper>
        </SelectWrapper>
        <CountryResults country={selectedCountry} />
      </FormWrapper>
      <GithubCornerPart />
    </PageWrapper>
  );
};

export default Dashboard;
