import React, { Component } from "react";
import PartyCard from "../components/PartyCard";
import { Segment } from "semantic-ui-react";

class UpcomingHostings extends Component {
  render() {
    return (
      <Segment>
        <div className="ui cards">I'm some upcoming hostings.</div>
      </Segment>
    );
  }
}

export default UpcomingHostings;
