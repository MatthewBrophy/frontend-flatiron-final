import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class AttendeePopup extends Component {
  render() {
    return (
      <Card id="popup">
        <Card.Content>
          <Image id="popup-pic" size="mini" src={this.props.profilePic} />
          <Card.Description id="popup-name">
            {this.props.profileName}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default AttendeePopup;
