import React, { Component } from "react";
import { Dropdown, Container, Icon } from "semantic-ui-react";
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
          <Dropdown.Menu id="dropdown-menu">
            <Dropdown.Item
              id="dropdown-item"
              text="Host a New Party"
              as={Link}
              to="/host-a-party"
              icon="plus"
            />
            <Dropdown.Item
              text="All Your Parties"
              icon="newspaper"
              id="dropdown-item"
            />
            <Dropdown.Item
              text="Home"
              as={Link}
              to="/"
              icon="home"
              id="dropdown-item"
            />
            <Dropdown.Item
              id="dropdown-item"
              text="Log Out"
              as={Link}
              to="/"
              onClick={() => this.FBLogout()}
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default MenuButton;
