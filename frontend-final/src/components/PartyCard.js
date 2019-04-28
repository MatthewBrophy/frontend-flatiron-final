import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";

class PartyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyImage: "",
      partyDescription: "",
      theme: "",
      host: this.props.details.host,
      time: this.props.details.time
    };
    this.retrievePartyDetails();
    this.convertTime();
  }

  convertTime = () => {
    let currentTimeString = this.props.details.time;
  };

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
    return (
      <Card id="party-card">
        <Card.Content>
          <Image
            size="small"
            src={this.state.partyImage}
            id="party-card-image"
          />
          <Card.Header>{this.state.theme}</Card.Header>
          <Card.Description>{this.state.partyDescription}</Card.Description>
        </Card.Content>
        <Card.Content>Date: {this.state.time}</Card.Content>
      </Card>
    );
  }
}

export default PartyCard;
