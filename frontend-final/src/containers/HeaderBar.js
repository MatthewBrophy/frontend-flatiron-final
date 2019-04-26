import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

import MenuButton from "../components/MenuButton";

class HeaderBar extends Component {
  render() {
    return (
      <Container id="top-bar" className="center aligned">
        <MenuButton />
        <p className="center aligned" id="main-title">
          Friends Feast!
        </p>
      </Container>
    );
  }
}

export default HeaderBar;
