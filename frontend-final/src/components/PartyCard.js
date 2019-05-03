import React, { Component } from "react";
import { Card, Image, Button, Segment } from "semantic-ui-react";

class PartyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card id="normal-party-card">
        <Card.Content className="center aligned" id="normal-card-content">
          <Image
            size="small"
            src={this.props.details.image}
            id="main-party-card-image"
          />
          <Card.Header>{this.props.details.name}</Card.Header>
          <Card.Description>{this.props.details.description}</Card.Description>
        </Card.Content>
        <Card.Content extra className="ui center aligned">
          <Button
            basic
            color="blue"
            onClick={() => this.props.newAttendance(this.props)}
          >
            Attend
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default PartyCard;
