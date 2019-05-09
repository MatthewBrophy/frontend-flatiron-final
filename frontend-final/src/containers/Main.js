import React, { Component, Fragment } from "react";
import HeaderBar from "./HeaderBar";
import ProfileDetails from "../components/ProfileDetails";
import UpcomingParties from "./UpcomingParties";
import FeaturedEvents from "./FeaturedEvents";
import PartyCollection from "./PartyCollection";

import { Container, Responsive } from "semantic-ui-react";

class Main extends Component {
  render() {
    return (
      <Container>
        <HeaderBar logout={this.props.logout} />
        <Fragment>
          <Responsive as={Fragment} minWidth={900}>
            <div id="main-column-control" className="ui two column grid">
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
            <PartyCollection
              user={this.props.currentUser}
              parties={this.props.parties}
              newAttendance={this.props.newAttendance}
            />
          </Responsive>
          <Responsive as={Fragment} maxWidth={900}>
            <div id="main-column-control">
              <div className="center aligned">
                <ProfileDetails
                  id="profile-display"
                  user={this.props.currentUser}
                />
              </div>
              <div className="center aligned">
                <FeaturedEvents
                  user={this.props.currentUser}
                  parties={this.props.parties}
                  newAttendance={this.props.newAttendance}
                />
                <PartyCollection
                  user={this.props.currentUser}
                  parties={this.props.parties}
                  newAttendance={this.props.newAttendance}
                />
              </div>
              <UpcomingParties user={this.props.currentUser} />
            </div>
          </Responsive>
        </Fragment>
      </Container>
    );
  }
}

export default Main;
