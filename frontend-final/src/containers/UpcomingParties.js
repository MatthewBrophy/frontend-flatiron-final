import React, { Component } from "react";
import UpcomingAttendances from "./UpcomingAttendances";
import UpcomingHostings from "./UpcomingHostings";

class UpcomingParties extends Component {
  render() {
    return (
      <div className="row center aligned" id="upcoming-parties-pane">
        <p id="upcoming-title-headline">Upcoming Parties</p>
        <div className="ui two column grid ">
          <div className="column">
            <p id="upcoming-title-block">Hosting:</p>
            <UpcomingHostings hostings={this.props.user.userParties.hosting} />
          </div>
          <div className="column">
            <p id="upcoming-title-block">Attending:</p>
            <UpcomingAttendances
              attending={this.props.user.userParties.attending}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingParties;
