import React, { Component } from "react";
import { Container, Segment, Card } from "semantic-ui-react";
import HeaderBar from "./HeaderBar";
import ProfileDetailsAllParties from "../components/ProfileDetailsAllParties";
import IndexPartyCard from "../components/IndexPartyCard";

class AllYourParties extends Component {
  state = {};
  render() {
    return (
      <Container>
        {console.log("props", this.props.currentUser.userParties)}
        <HeaderBar />
        <ProfileDetailsAllParties user={this.props.currentUser} />
        <Container className="center aligned">
          <p id="all-parties-heading">Parties You're Hosting</p>
        </Container>
        <Segment.Group horizontal id="party-pane">
          <Card.Group id="party-display-group">
            {this.props.currentUser.userParties.hosting.map(details => (
              <IndexPartyCard
                details={details}
                key={details.id}
                deleteInstance={this.props.deleteHosting}
              />
            ))}
          </Card.Group>
        </Segment.Group>
        <Container className="center aligned">
          <p id="all-parties-heading">Parties You're Attending</p>
        </Container>
        <Segment.Group horizontal id="party-pane">
          <Card.Group id="party-display-group">
            {this.props.currentUser.userParties.attending.map(details => (
              <IndexPartyCard
                details={details}
                key={details.id}
                deleteInstance={this.props.deleteAttendance}
              />
            ))}
          </Card.Group>
        </Segment.Group>
      </Container>
    );
  }
}

export default AllYourParties;
