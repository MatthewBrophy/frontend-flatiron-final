import React, { Component } from "react";
import HeaderBar from "./HeaderBar";
import ProfileDetails from "../components/ProfileDetails";
import UpcomingParties from "./UpcomingParties";
import FeaturedEvents from "./FeaturedEvents";
import PartyCollection from "./PartyCollection";

import { Container } from "semantic-ui-react";

class Main extends Component {
  render() {
    return (
      <Container>
        <HeaderBar logout={this.props.logout} />

        <div className="ui two column grid">
          <div className="row">
            <div className="column center aligned">
              <ProfileDetails
                id="profile-display"
                user={this.props.currentUser}
              />

              <UpcomingParties user={this.props.currentUser} />
            </div>
            <div className="column center aligned">
              <FeaturedEvents
                user={this.props.currentUser}
                parties={this.props.parties}
                newAttendance={this.props.newAttendance}
              />
            </div>
          </div>
        </div>

        <div className="ui grid center aligned">
          <PartyCollection
            user={this.props.currentUser}
            parties={this.props.parties}
            newAttendance={this.props.newAttendance}
          />
        </div>
      </Container>
    );
  }
}

export default Main;
