import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MenuButton extends Component {
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
              as={Link}
              to="/all-your-parties"
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
