import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class PartyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyImage: "",
      partyDescription: "",
      theme: "",
      host: this.props.details.host
    };
    this.retrievePartyDetails();
  }

  retrievePartyDetails = () => {
    fetch(
      `http://localhost:3000/api/v1/cooking_parties/${
        this.props.details.cooking_party_id
      }/retrieve-party-details`
    )
      .then(res => res.json())
      .then(details =>
        this.setState({
          partyImage: details.image,
          partyDescription: details.description,
          theme: details.theme
        })
      );
  };

  render() {
    return <div id="party-card">PC</div>;
  }
}

export default PartyCard;
