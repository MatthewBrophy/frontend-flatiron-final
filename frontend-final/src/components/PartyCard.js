import React, { Component } from "react";

class PartyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyImage: ""
    };
  }

  render() {
    return <div id="party-card">PC</div>;
  }
}

export default PartyCard;
