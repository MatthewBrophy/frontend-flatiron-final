import React, { Component } from "react";
import { Card, Image, Button, Popup, Icon } from "semantic-ui-react";
import AttendeePopup from "./AttendeePopup";

class IndexPartyCard extends Component {
  state = { date: "" };

  componentDidMount() {
    this.convertDate();
  }

  convertDate = () => {
    let month = this.props.details.date.slice(5, 7);
    let monthConverted;
    switch (month) {
      case "01":
        monthConverted = "Jan";
        break;
      case "02":
        monthConverted = "Feb";
        break;
      case "03":
        monthConverted = "Mar";
        break;
      case "04":
        monthConverted = "Apr";
        break;
      case "05":
        monthConverted = "May";
        break;
      case "06":
        monthConverted = "Jun";
        break;
      case "07":
        monthConverted = "Jul";
        break;
      case "08":
        monthConverted = "Aug";
        break;
      case "09":
        monthConverted = "Sep";
        break;
      case "10":
        monthConverted = "Oct";
        break;
      case "11":
        monthConverted = "Nov";
        break;
      case "12":
        monthConverted = "Dec";
        break;
      default:
        monthConverted = month;
    }
    let day = this.props.details.date.slice(8, 10);
    let hour = parseInt(this.props.details.date.slice(11, 13)) - 7;

    let convertedHour;
    if (hour > 12) {
      convertedHour = hour - 12;
    } else if (hour <= -1) {
      convertedHour = hour + 12;
    } else {
      convertedHour = hour;
    }
    let minutes = this.props.details.date.slice(14, 16);
    let convertedMinutes;
    if (hour > 12) {
      convertedMinutes = `${minutes} PM`;
    } else if (hour === 12 || hour <= -1) {
      convertedMinutes = `${minutes} PM`;
    } else {
      convertedMinutes = `${minutes} AM`;
    }
    let convertedTime =
      `${monthConverted}` +
      ` ${day}` +
      " at " +
      `${convertedHour}:${convertedMinutes}`;
    this.setState({ date: convertedTime });
  };
  render() {
    return (
      <Card id="normal-party-card">
        <Card.Content className="center aligned" id="normal-card-content">
          <Image
            size="small"
            src={this.props.details.cooking_party.image}
            id="main-party-card-image"
          />
          <Card.Header>{this.props.details.cooking_party.name}</Card.Header>
          <Card.Meta>Date: {this.state.date}</Card.Meta>
          <Card.Description>
            {this.props.details.cooking_party.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="ui center aligned">
          <Button
            basic
            color="blue"
            onClick={() => {
              if (window.confirm("Are you sure you wish to cancel!?"))
                this.props.deleteInstance(this.props);
            }}
          >
            CANCEL
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default IndexPartyCard;

{
  /* <Card id="normal-party-card">
        <Card.Content className="center aligned" id="normal-card-content">
          <Image
            size="small"
            src={this.props.details.image}
            id="main-party-card-image"
          />
          <Card.Header>{this.props.details.name}</Card.Header>
          <Card.Meta>Date: {this.state.date}</Card.Meta>
          <Card.Description>{this.props.details.description}</Card.Description>
        </Card.Content>
        <Card.Content extra className="ui center aligned">
          <Popup
            id="attendee-popup-window"
            trigger={<Icon circular name="user circle" color="blue" />}
          >
            {this.props.details.users.map((attendee, index) => (
              <AttendeePopup
                key={index}
                profilePic={attendee.profile_pic}
                profileName={attendee.name}
              />
            ))}
          </Popup>
          <p id="whose-attending">See Whose Attending</p>
          <Button
            basic
            color="blue"
            onClick={() => this.props.newAttendance(this.props)}
          >
            Attend
          </Button>
        </Card.Content>
      </Card> */
}
