import React, { Component } from "react";
import PartyCard from "../components/PartyCard";
import { Segment } from "semantic-ui-react";

class UpcomingHostings extends Component {
  render() {
    return (
      <Segment.Group
        horizontal
        style={{ overflow: "auto", maxWidth: 400, margin: "auto" }}
        className="row"
      >
        I'm some upcoming Hostings!
        {this.props.hostings.slice(0, 20).map(party => (
          <Segment key={party.id}>
            <PartyCard details={party} key={party.id} />
          </Segment>
        ))}
        {console.log("Hostings", this.props)}
      </Segment.Group>
    );
  }
}

export default UpcomingHostings;
