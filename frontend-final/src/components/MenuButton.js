import React, { Component } from "react";
import { Dropdown, Container } from "semantic-ui-react";

class MenuButton extends Component {
  render() {
    return (
      <div>
        <Dropdown text="Menu" id="menu-button">
          <Dropdown.Menu>
            <Dropdown.Item text="Your Parties" />
            <Dropdown.Item text="Invite Friends" />
            <Dropdown.Item text="Edit Profile" />
            <Dropdown.Item text="Log Out" onClick={() => window.FB.logout()} />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default MenuButton;
