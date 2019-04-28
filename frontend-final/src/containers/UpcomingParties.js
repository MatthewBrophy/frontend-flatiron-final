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
      <div className="row center aligned">
        <Segment.Group>
          <p>Upcoming Parties</p>
          <UpcomingHostings hostings={this.props.user.userParties.hosting} />
          <UpcomingAttendances
            attending={this.props.user.userParties.attending}
          />
        </Segment.Group>
      </div>
    );
  }
}

export default UpcomingParties;
