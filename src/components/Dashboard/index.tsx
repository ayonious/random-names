import React, { useState } from 'react';
import { SingleValue } from 'react-select';

import { database } from '../../resources/Database';
import CountryResults from '../CountryResults';
import GithubCornerPart from '../GithubCornerPart';
import Greeting from '../Greeting';
import SelectCountry, { SelectItem } from '../SelectCountry';
import { PageWrapper } from './styles';

const regions = Object.keys(database);

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
      <SelectCountry selectList={selectList} onSelectOption={onSelectOption} />
      <CountryResults country={selectedCountry} />
      <GithubCornerPart />
    </PageWrapper>
  );
};

export default Dashboard;
