import React, { Component, Fragment } from "react";
import { Responsive } from "semantic-ui-react";
import UpcomingAttendances from "./UpcomingAttendances";
import UpcomingHostings from "./UpcomingHostings";

class UpcomingParties extends Component {
  render() {
    return (
      <Fragment>
        <Responsive as={Fragment} minWidth={900}>
          <div className="row center aligned" id="upcoming-parties-pane">
            <p id="upcoming-title-headline">Upcoming Parties</p>
            <div className="ui two column grid ">
              <div className="column">
                <p id="upcoming-title-block">Hosting:</p>
                <UpcomingHostings
                  hostings={this.props.user.userParties.hosting}
                />
              </div>
              <div className="column">
                <p id="upcoming-title-block">Attending:</p>
                <UpcomingAttendances
                  attending={this.props.user.userParties.attending}
                />
              </div>
            </div>
          </div>
        </Responsive>
        <Responsive as={Fragment} maxWidth={900}>
          <div className="row center aligned" id="upcoming-parties-pane">
            <p id="upcoming-title-headline">Upcoming Parties</p>

            <div className="column">
              <p id="upcoming-title-block">Hosting:</p>
              <UpcomingHostings
                hostings={this.props.user.userParties.hosting}
              />
            </div>
            <div className="column">
              <p id="upcoming-title-block">Attending:</p>
              <UpcomingAttendances
                attending={this.props.user.userParties.attending}
              />
            </div>
          </div>
        </Responsive>
      </Fragment>
    );
  }
}

export default UpcomingParties;
