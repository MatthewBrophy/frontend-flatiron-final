import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import PartyCard from "../components/PartyCard";

class UpcomingAttendances extends Component {
  render() {
    return (
      <Segment.Group
        horizontal
        style={{ overflow: "auto", maxWidth: 400, margin: "auto" }}
        className="row"
      >
        I'm some upcoming attendances!
        {this.props.attending.slice(0, 10).map(party => (
          <Segment key={party.id}>
            <PartyCard id="party-card" details={party} key={party.id} />
          </Segment>
        ))}
      </Segment.Group>
    );
  }
}

export default UpcomingAttendances;
