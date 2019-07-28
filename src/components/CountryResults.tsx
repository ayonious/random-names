import * as React from "react";
import Card from "@material-ui/core/Card";
import { database } from "../resources/Database";
import { CustomButton } from "./Utils";

interface Props {
  country: string;
}

interface State {
  currentName: string;
}

const cardStyle = {
  height: 50,
  width: 170,
  margin: "0 auto",
  fontSize: "xx-large",
  textAlign: "center" as "center"
};

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
    return (
      <div>
        <br />
        <div style={cardStyle}>
          <Card square={true}> {this.state.currentName} </Card>
        </div>
        <br />
        <div>
          <CustomButton onClick={this.handleShuffle} title={"Shuffle"} />{" "}
        </div>
      </div>
    );
  }
}
