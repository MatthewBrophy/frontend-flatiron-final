import React, { Component } from "react";
import { Segment, Card, Item } from "semantic-ui-react";
import MiniPartyCard from "../components/MiniPartyCard";

class UpcomingAttendances extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card.Group id="upcoming-attendance-list">
        {console.log("attending at upcoming", this.props.attending)}
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
