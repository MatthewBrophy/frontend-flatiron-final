import React, { Component } from "react";
import { Button, Card, Image, Icon, Popup } from "semantic-ui-react";
import AttendeePopup from "./AttendeePopup";

class FeaturedPardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      host: ""
    };
  }

  componentDidMount() {
    this.convertDate();
    this.setHost();
  }

  setHost = () => {
    let id = this.props.details.id;
    fetch(
      `http://localhost:3000/api/v1/cooking_parties/${id}/retrieve-party-host`
    )
      .then(res => res.json())
      .then(response => this.setState({ host: response.name }));
  };

  convertDate = () => {
    let month = this.props.details.attendances[0].date.slice(5, 7);
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
    let day = this.props.details.attendances[0].date.slice(8, 10);
    let hour =
      parseInt(this.props.details.attendances[0].date.slice(11, 13)) - 7;

    let convertedHour;
    if (hour > 12) {
      convertedHour = hour - 12;
    } else if (hour <= -1) {
      convertedHour = hour + 12;
    } else {
      convertedHour = hour;
    }
    let minutes = this.props.details.attendances[0].date.slice(14, 16);
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
      <Card id="featured-party-card">
        <Card.Content id="featured-party-card-main-display-area">
          <Image
            id="featured-party-card-image"
            src={this.props.details.image}
            size="medium"
          />
          <Card.Header id="featured-card-title">
            {this.props.details.name}
          </Card.Header>
          <Card.Meta id="featured-card-hosted-by">
            Hosted By: {this.state.host} on {this.state.date}
          </Card.Meta>
          <Card.Description id="featured-party-description">
            {this.props.details.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
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
          </Popup>{" "}
          <p id="party-card-attendees">See Whose Attending</p>
          <Button
            id="attend-button"
            basic
            onClick={() => this.props.newAttendance(this.props)}
          >
            Attend
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default FeaturedPardCard;
