import React, { Component } from "react";
import MiniPartyCard from "../components/MiniPartyCard";
import { Card } from "semantic-ui-react";

class UpcomingHostings extends Component {
  render() {
    return (
      <Card.Group id="upcoming-hosting-list">
        {this.props.hostings
          .slice(0, 5)
          .sort((a, b) => a.date.localeCompare(b.date))
          .map(party => (
            <MiniPartyCard details={party} key={party.id} />
          ))}
      </Card.Group>
    );
  }
}

export default UpcomingHostings;
