import * as React from "react";
import { CustomButton } from "./Utils";
import Paper from "@material-ui/core/Paper";

export default class CountryReults extends React.Component {
  constructor(props) {
    super(props);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.state = { currentName: "" };
  }

  handleShuffle() {
    const map = {
      DE: ["michael", "felix", "caroline", "evelyn", "fred", "george"],
      ES: [
        "angelo",
        "danilo",
        "ronaldo",
        "emmanuel",
        "angela",
        "amigo",
        "gustavo"
      ],
      IT: ["rachele", "ekkia", "lorenzo", "mamamia"],
      FR: ["thomas", "marc", "paris"],
      EN: ["jonathan", "hoppin", "jones", "jacky", "omg"]
    };

    const index = Math.floor(Math.random() * map[this.props.country].length);
    const name = map[this.props.country][index];
    this.setState({ currentName: name });
  }

  render() {
    const style = {
      width: 150,
      height: 50,
      "font-size": "xx-large"
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
