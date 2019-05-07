import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class AttendeePopup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card id="popup">
        <Card.Content>
          <Image
            id="popup-pic"
            size="mini"
            src={this.props.attendee.user.profile_pic}
          />
          <Card.Description id="popup-name">
            {this.props.attendee.user.name}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default AttendeePopup;
