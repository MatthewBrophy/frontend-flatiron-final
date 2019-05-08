import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import MiniPartyCard from "../components/MiniPartyCard";

class UpcomingAttendances extends Component {
  render() {
    return (
      <Card.Group id="upcoming-attendance-list">
        {this.props.attending
          .slice(0, 5)
          .sort((a, b) => a.date.localeCompare(b.date))
          .map(party => (
            <MiniPartyCard details={party} key={party.id} />
          ))}
      </Card.Group>
    );
  }
}

export default UpcomingAttendances;
