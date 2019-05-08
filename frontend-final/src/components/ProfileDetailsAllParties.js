import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class ProfileDetailsAllParties extends Component {
  render() {
    return (
      <Container className="center aligned">
        <div className="row center aligned" id="profile-display-all-parties">
          <div className="item">
            <img
              id="profile-pic2"
              src={this.props.user.userProfilePic}
              alt="user profile pic"
            />
          </div>
          <div className="item">
            <p id="profile-details1">{this.props.user.userName}</p>
            <p id="profile-details2">
              Hosted Parties: {this.props.user.userParties.hosting.length}
            </p>
            <p id="profile-details2">
              Parties Attended: {this.props.user.userParties.attending.length}
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default ProfileDetailsAllParties;
