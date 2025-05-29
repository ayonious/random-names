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
    <PageWrapper data-testid="page-wrapper">
      <Greeting data-testid="greeting" />
      <SelectCountry 
        data-testid="country-select"
        selectList={selectList} 
        onSelectOption={onSelectOption} 
      />
      <CountryResults data-testid="country-results" country={selectedCountry} />
      <GithubCornerPart data-testid="github-corner" />
    </PageWrapper>
  );
};

export default Dashboard;
