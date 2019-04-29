import React, { Component } from "react";
import UpcomingAttendances from "./UpcomingAttendances";
import UpcomingHostings from "./UpcomingHostings";
import { Segment } from "semantic-ui-react";

class UpcomingParties extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row center aligned" id="upcoming-parties-pane">
        <p>Upcoming Parties</p>
        <div className="ui two column grid ">
          <div className="column">
            <UpcomingHostings hostings={this.props.user.userParties.hosting} />
          </div>
          <div className="column">
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
