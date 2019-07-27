import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { database } from "../resources/Database";
import { CustomButton } from "./Utils";

interface Props {
  country: string;
}

interface State {
  currentName: string;
}

export default class CountryReults extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.state = { currentName: "" };
  }

  handleShuffle() {
    const index = Math.floor(
      Math.random() * Object.keys(database[this.props.country].names).length
    );
    const name = database[this.props.country].names[index];
    this.setState({ currentName: name });
  }

  render() {
    const style = {
      height: 50,
      width: 150,
      margin: "0 auto",
      fontSize: "xx-large",
      contentAlign: "center"
    };
    return (
      <div>
        <br />
        <div style={style}>
          <Paper square={true}>{this.state.currentName}</Paper>
        </div>
        <br />
        <div>
          <CustomButton onClick={this.handleShuffle} title={"Shuffle"} />{" "}
        </div>
      </div>
    );
  }
}
