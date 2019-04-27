import React, { Component } from "react";

class ProfileDetails extends Component {
  state = {};
  render() {
    return (
      <div className="row" id="profile-display">
        <div className="item">
          <img
            id="profile-pic"
            src={this.props.user.userProfilePic}
            alt={this.props.user.userId}
          />
        </div>
        <div className="item" id="profile-details">
          {console.log(this.props.user)}
          <p>{this.props.user.userName}</p>
          <p>Hosted Parties: {this.props.user.userParties.hosting.length}</p>
          <p>
            Parties Attended: {this.props.user.userParties.attending.length}
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileDetails;
