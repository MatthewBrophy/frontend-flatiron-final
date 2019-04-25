import React, { Component } from "react";
import HeaderBar from "./HeaderBar";

import {
  Container,
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <HeaderBar />
      </Container>
    );
  }
}

export default Main;
