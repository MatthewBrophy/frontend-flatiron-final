import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";

class FeaturedPardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  componentDidMount() {
    this.convertDate();
  }

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
        <Card.Content>
          <Image
            id="featured-party-card-image"
            src={this.props.details.image}
            size="medium"
          />
          <Card.Header>{this.props.details.name}</Card.Header>
          <Card.Meta>
            Hosted By: {this.props.user.userName} on {this.state.date}
          </Card.Meta>
          <Card.Description>{this.props.details.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color="blue"
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
