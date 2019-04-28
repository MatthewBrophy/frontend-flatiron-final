import React, { Component } from "react";
import { Segment, Card, Item } from "semantic-ui-react";
import PartyCard from "../components/PartyCard";

class UpcomingAttendances extends Component {
  render() {
    return (
      <Segment>
        <div className="ui cards">
          Im upcoming attendances.
          {console.log(
            "props in attendances",
            this.props.attending.slice(0, 10)
          )}
        </div>
      </Segment>
    );
  }
}

export default UpcomingAttendances;
