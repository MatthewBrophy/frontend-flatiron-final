import React, { Component } from "react";

class PartyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyImage: ""
    };
  }
  render() {
    return <div>{console.log(this.props)}PC</div>;
  }
}

export default PartyCard;
