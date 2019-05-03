import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class NewPartyForm extends Component {
  state = {
    user_id: this.props.state.DBID,
    partyName: "",
    partyTheme: "",
    partyDescription: "",
    host: true,
    startDate: new Date(),
    partyImage: "",
    partyLocation: ""
  };

  setPartyName = info => {
    if (info.length <= 15) {
      this.setState({ partyName: info });
    } else {
      alert("Party Name Must be Less than 15 Characters!");
    }
  };
  setPartyTheme = info => {
    if (info.length <= 15) {
      this.setState({ partyTheme: info });
    } else {
      alert("Party Theme Must be Less than 15 Characters!");
    }
  };
  setPartyDescription = info => {
    if (info.length <= 250) {
      this.setState({ partyDescription: info });
    } else {
      alert("Party Description Must be Less than 250 Characters!");
    }
  };
  setPartyDate = info => this.setState({ startDate: info });
  setPartyImage = info => this.setState({ partyImage: info });
  setPartyLocation = info => this.setState({ partyLocation: info });

  submitForm = e => {
    fetch("http://localhost:3000/api/v1/cooking_parties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        name: this.state.partyName,
        theme: this.state.partyTheme,
        description: this.state.partyDescription,
        host: true,
        date: this.state.startDate,
        image: this.state.partyImage,
        location: this.state.partyLocation
      })
    })
      .then(res => res.json())
      .then(newAttendance => this.props.updateHostings(newAttendance))
      .then(() => this.redirectHome());
  };

  redirectHome = () => {
    window.location.replace("https://localhost:3001/");
  };

  render() {
    return (
      <Form
        className="ui center aligned"
        id="new-party-form"
        onSubmit={this.submitForm}
      >
        <Form.Group className="ui center aligned">
          <p id="form-title">Host a New Party!</p>
        </Form.Group>
        <Form.Group className="ui grid center aligned" id="date-picker">
          <p id="new-party-date-label">Party Date:</p>
        </Form.Group>
        <Form.Group className="ui grid center aligned" id="date-picker">
          <DatePicker
            id="date-picker-window"
            className="ui center aligned"
            selected={this.state.startDate}
            onChange={e => this.setPartyDate(e)}
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa "
            timeCaption="time"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Party Name:"
            placeholder="Party Name...(15 Characters Max)"
            onChange={e => this.setPartyName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Party Theme:"
            placeholder="Party Theme...(15 Characters Max)"
            onChange={e => this.setPartyTheme(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Party Cover Image:"
            placeholder="Select an image URL to import..."
            onChange={e => this.setPartyImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Party Location:"
            placeholder="Party Address..."
            onChange={e => this.setPartyLocation(e.target.value)}
          />
        </Form.Group>
        <Form.TextArea
          label="Party Description:"
          placeholder="Tell us more about your party...(250 characters max)"
          onChange={e => this.setPartyDescription(e.target.value)}
        />

        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default NewPartyForm;
