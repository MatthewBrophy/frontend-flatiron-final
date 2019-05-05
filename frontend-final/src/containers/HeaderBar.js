import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import titleImage from "../images/TitleImage3.png";

import MenuButton from "../components/MenuButton";

class HeaderBar extends Component {
  render() {
    return (
      <Container id="top-bar" className="center aligned">
        <MenuButton logout={this.props.logout} />

        <img id="title-bar-image" src={titleImage} alt="" />
      </Container>
    );
  }
}

export default HeaderBar;
