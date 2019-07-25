import * as React from "react";
import { CustomButton } from "./Utils";
import Paper from "@material-ui/core/Paper";
import { database } from "../resources/Database";

export default class CountryReults extends React.Component {
  constructor(props) {
    super(props);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.state = { currentName: "" };
  }

  handleShuffle() {
    const index = Math.floor(
      Math.random() * database[this.props.country].names.length
    );
    const name = database[this.props.country].names[index];
    this.setState({ currentName: name });
  }

  render() {
    const style = {
      width: 150,
      height: 50,
      fontSize: "xx-large"
    };
    return (
      <div>
        <br />
        <div style={style}>
          <Paper square={true}>{this.state.currentName}</Paper>
        </div>
        <br />
        <h1>
          <CustomButton onClick={this.handleShuffle} title={"Shuffle"} />{" "}
        </h1>
      </div>
    );
  }
}
