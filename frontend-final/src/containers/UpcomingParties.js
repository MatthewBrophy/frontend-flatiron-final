import React, { Component } from "react";

class UpcomingParties extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {console.log("props at Upcoming Party", this.props)}
        <p>Upcoming Parties</p>
      </div>
    );
  }
}

export default UpcomingParties;
