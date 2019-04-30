import React, { Component } from "react";
import { Dropdown, Container } from "semantic-ui-react";
import { Redirect, Link } from "react-router-dom";
import UsersParties from "../containers/UsersParties";

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  FBLogout = () => {
    window.FB.logout();
    this.props.logout();
  };

  render() {
    return (
      <div>
        <Dropdown text="Menu" id="menu-button">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Host a New Party"
              as={Link}
              to="/host-a-party"
            />
            <Dropdown.Item text="Home" as={Link} to="/" />
            <Dropdown.Item text="Invite Friends" />
            <Dropdown.Item text="Edit Profile" />
            <Dropdown.Item
              text="Log Out"
              as={Link}
              to="/"
              onClick={() => this.FBLogout()}
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default MenuButton;
