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
            />
          ))}
        </Card.Group>
      </Segment.Group>
    );
  };

  render() {
    return (
      <div className="row">
        {this.props.selected === "allParties"
          ? this.displayAllParties()
          : this.props.selected === "soonestParties"
          ? console.log("Your mom soon")
          : this.props.selected === "newestParties"
          ? console.log("Your newest mom")
          : this.props.selected === "sponsoredParties"
          ? console.log("ooooh your mom is sponsored")
          : null}
      </div>
    );
  }
}

export default PartyDisplayPane;
