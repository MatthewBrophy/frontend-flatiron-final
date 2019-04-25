import React, { Component } from "react";
import { Dropdown, Container } from "semantic-ui-react";

class MenuButton extends Component {
  render() {
    return (
      <Dropdown text="Menu" id="menu-button">
        <Dropdown.Menu>
          <Dropdown.Item text="Your Parties" />
          <Dropdown.Item text="Your Recipes" />
          <Dropdown.Item text="Invite Friends" />
          <Dropdown.Item text="Edit Profile" />
          <Dropdown.Item text="Log Out" />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default MenuButton;
