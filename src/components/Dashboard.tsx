import * as React from "react";
import CountryReults from "./CountryResults";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {regions} from '../resources/Database';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.state = { selectedCountry: "DE", currentName: "" };
  }

  onSelectOption(event) {
    this.setState({ selectedCountry: event.target.value });
  }

  render() {
    const selectList = regions.map(elem => (
      <MenuItem key={elem} value={elem}>
        {elem}
      </MenuItem>
    ));
    return (
      <div align={"middle"}>
        <FormControl>
          <Select
            value={this.state.selectedCountry}
            onChange={this.onSelectOption}
            autoWidth={true}
          >
            {selectList}
          </Select>
          <FormHelperText>Region</FormHelperText>
        </FormControl>
        <CountryReults country={this.state.selectedCountry} />
      </div>
    );
  }
}
