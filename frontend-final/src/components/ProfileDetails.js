import React, { Component } from "react";

class ProfileDetails extends Component {
  render() {
    return (
      <div className="row" id="profile-display">
        <div className="item">
          <img
            id="profile-pic"
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
    );
  }
}

export default ProfileDetails;
