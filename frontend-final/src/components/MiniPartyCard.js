import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";

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
      .then(attendees =>
        this.setState(
          { attendees: attendees },
          console.log("attendees", this.state.attendees)
        )
      );
  };

  render() {
    return (
      <Card
        id="mini-party-card"
        onMouseEnter={() => this.retrievePartyAttendees()}
      >
        {console.log("props at minicard", this.state.attendees)}
        <Card.Content>
          <Image src={this.state.partyImage} id="party-card-image" />
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Meta>Date: {this.state.date}</Card.Meta>
          <Card.Description>{this.state.partyDescription}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default MiniPartyCard;
