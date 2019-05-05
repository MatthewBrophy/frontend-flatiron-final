import React, { Component } from "react";
import FeaturedPartyCard from "../components/FeaturedPartyCard";
import { Segment } from "semantic-ui-react";

class FeaturedEvents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment id="sponsored-display">
        <p> Featured Events! </p>
        {this.props.parties.allParties
          .filter(party => party.sponsored === true)
          .map(party => (
            <FeaturedPartyCard details={party} key={party.id} />
          ))}
      </Segment>
    );
  }
}

export default FeaturedEvents;
