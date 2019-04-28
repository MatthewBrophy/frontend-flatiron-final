import React, { Component } from "react";
import { Segment, Card, Item } from "semantic-ui-react";
import PartyCard from "../components/PartyCard";

class UpcomingAttendances extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment>
        <Card.Group centered>
          {this.props.attending.slice(0, 5).map(party => (
            <PartyCard details={party} key={party.id} />
          ))}
        </Card.Group>
      </Segment>
    );
  }
}

export default UpcomingAttendances;
