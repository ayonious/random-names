import * as React from "react";
import Dashboard from "./Dashboard";
import Container from "@material-ui/core/Container";
import { CustomButton, Greeting } from "./Utils";

interface Props {}

interface State {
  isLoggedIn: boolean;
}

export default class LoginControl extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <Container maxWidth="sm">
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {!isLoggedIn && (
            <CustomButton onClick={this.handleLoginClick} title={"Start"} />
          )}
          {isLoggedIn && <Dashboard />}
        </div>
      </Container>
    );
  }
}
