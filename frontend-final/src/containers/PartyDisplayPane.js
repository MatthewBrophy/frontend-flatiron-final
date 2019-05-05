import React, { Component } from "react";
import { Card, Segment } from "semantic-ui-react";
import PartyCard from "../components/PartyCard";

class PartyDisplayPane extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayAllParties = () => {
    return (
      <Segment.Group horizontal id="party-pane">
        <Card.Group id="party-display-group">
          {this.props.parties.allParties.map(details => (
            <PartyCard
              details={details}
              newAttendance={this.props.newAttendance}
              key={details.id}
            />
          ))}
        </Card.Group>
      </Segment.Group>
    );
  };

  displaySoonestParties = () => {
    let soonestParties = this.props.parties.allParties.slice().reverse();
    return (
      <Segment.Group horizontal id="party-pane">
        <Card.Group id="party-display-group">
          {soonestParties.map(details => (
            <PartyCard
              details={details}
              newAttendance={this.props.newAttendance}
              key={details.id}
            />
          ))}
        </Card.Group>
      </Segment.Group>
    );
  };

  displaySponsoredParties = () => {
    let sponsoredParties = this.props.parties.allParties.filter(
      party => party.sponsored === true
    );
    return (
      <Segment.Group horizontal id="party-pane">
        <Card.Group id="party-display-group">
          {sponsoredParties.map(details => (
            <PartyCard
              details={details}
              newAttendance={this.props.newAttendance}
              key={details.id}
            />
          ))}
        </Card.Group>
      </Segment.Group>
    );
  };

  render() {
    return (
      <div id="party-display-pane" className="row">
        {this.props.selected === "allParties"
          ? this.displayAllParties()
          : this.props.selected === "soonestParties"
          ? this.displaySoonestParties()
          : this.props.selected === "sponsoredParties"
          ? this.displaySponsoredParties()
          : null}
      </div>
    );
  }
}

export default PartyDisplayPane;
