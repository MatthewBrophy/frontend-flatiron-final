import React, { Component, Fragment } from "react";
import { Button, Card, Image, Popup, Icon, Segment } from "semantic-ui-react";
import AttendeePopup from "../components/AttendeePopup";

class MiniPartyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyImage: "",
      partyDescription: "",
      name: "",
      theme: "",
      host: this.props.details.host,
      date: "",
      attendees: []
    };
    this.retrievePartyDetails();
    this.retrievePartyAttendees();
  }

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

  retrievePartyDetails = () => {
    fetch(
      `http://localhost:3000/api/v1/cooking_parties/${
        this.props.details.cooking_party_id
      }/retrieve-party-details`
    )
      .then(res => res.json())
      .then(details =>
        this.setState({
          partyImage: details.image,
          partyDescription: details.description,
          theme: details.theme,
          name: details.name
        })
      );
  };

  retrievePartyAttendees = () => {
    fetch(
      `http://localhost:3000/api/v1/cooking_parties/${
        this.props.details.cooking_party_id
      }/retrieve-attendances`
    )
      .then(res => res.json())
      .then(attendees => this.setState({ attendees: attendees }));
  };

  render() {
    return (
      <Fragment>
        <Card id="mini-party-card">
          <Card.Content>
            <Image
              src={this.state.partyImage}
              id="party-card-image"
              size="small"
            />
            <Card.Header>{this.state.name}</Card.Header>

            <Popup
              id="attendee-popup-window"
              trigger={<Icon circular name="user circle" color="blue" />}
            >
              {this.state.attendees.map(attendee => (
                <AttendeePopup
                  profilePic={attendee.user.profile_pic}
                  profileName={attendee.user.name}
                />
              ))}
            </Popup>
            <Card.Meta id="whose-attending">See Whose Attending</Card.Meta>
            <Card.Meta>Date: {this.state.date}</Card.Meta>
            <Card.Description>{this.state.partyDescription}</Card.Description>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

export default MiniPartyCard;
