import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import * as React from 'react';

import { database } from '../resources/Database';
import { FormWrapper } from '../styles/styles';
import CountryReults from './CountryResults';
import { Greeting } from './Utils';

const regions = Object.keys(database);

interface Props {}

interface State {
  selectedCountry: string;
  currentName: string;
}
export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.state = { selectedCountry: 'Germany', currentName: '' };
  }

  onSelectOption(event: any) {
    this.setState({ selectedCountry: event.target.value });
  }

  render() {
    const selectList = regions.map(region => (
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
              value={this.state.selectedCountry}
              onChange={this.onSelectOption}
              autoWidth={false}
            >
              {selectList}
            </Select>
            <FormHelperText>Region</FormHelperText>
          </FormControl>
          <CountryReults country={this.state.selectedCountry} />
        </FormWrapper>
      </div>
    );
  }
}
