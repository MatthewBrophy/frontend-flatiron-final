import React, { Component } from "react";
import UpcomingAttendances from "./UpcomingAttendances";
import UpcomingHostings from "./UpcomingHostings";

class UpcomingParties extends Component {
  constructor(props) {
    super(props);
  }

  getUpcomingEvents = () => {
    console.log("props at events", this.props);
  };

  componentDidMount() {
    this.getUpcomingEvents();
  }

  render() {
    return (
      <div className="row center aligned">
        <p>Upcoming Parties</p>
        <UpcomingHostings hostings={this.props.user.userParties.hosting} />
        <UpcomingAttendances
          attending={this.props.user.userParties.attending}
        />
      </div>
    );
  }
}

export default UpcomingParties;
