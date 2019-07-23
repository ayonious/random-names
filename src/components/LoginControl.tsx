import * as React from "react";
import Dashboard from "./Dashboard";
import Container from "@material-ui/core/Container";
import { CustomButton, Greeting } from "./Utils";

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, clickCount: 0 };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true, clickCount: this.state.clickCount + 1 });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false, clickCount: this.state.clickCount + 1 });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <Container maxWidth="sm">
        <div>
          <Greeting isLoggedIn={this.state.isLoggedIn} />
          {!isLoggedIn && (
            <CustomButton onClick={this.handleLoginClick} title={"Start"} />
          )}
          {isLoggedIn && <Dashboard />}
        </div>
      </Container>
    );
  }
}
