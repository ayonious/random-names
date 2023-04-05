import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';

import {
  CustomSelectStyles,
  FormWrapper,
  SelectItemWrapper,
  SelectTitleWrapper,
  SelectWrapper,
} from './styles';

export interface SelectItem {
  label: string;
  value: string;
}

const SelectCountry = ({ selectList, onSelectOption }: any) => (
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
  </FormWrapper>
);

export default SelectCountry;
