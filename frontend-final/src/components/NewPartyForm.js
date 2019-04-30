import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewPartyForm extends Component {
  state = {
    userID: this.props.state.DBID,
    partyName: "",
    partyTheme: "",
    partyDescription: "",
    host: true,
    startDate: new Date(),
    partyImage: "",
    partyLocation: ""
  };

  setPartyName = info => this.setState({ partyName: info });
  setPartyTheme = info => this.setState({ partyTheme: info });
  setPartyDescription = info => this.setState({ partyDescription: info });
  setPartyDate = info => this.setState({ startDate: info });
  setPartyImage = info => this.setState({ partyImage: info });
  setPartyLocation = info => this.setState({ partyLocation: info });

  submitForm = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/cooking_parties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userID: this.state.userID,
        name: this.state.partyName,
        theme: this.state.partyTheme,
        description: this.state.partyDescription,
        host: true,
        date: this.state.startDate,
        image: this.state.partyImage,
        location: this.state.partyLocation
      })
    });
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
            className="ui center aligned"
            selected={this.state.startDate}
            onChange={e => this.setPartyDate(e)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Party Name:"
            placeholder="Party Name..."
            onChange={e => this.setPartyName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Party Theme:"
            placeholder="Theme Your Party..."
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
            placeholder="Address..."
            onChange={e => this.setPartyLocation(e.target.value)}
          />
        </Form.Group>
        <Form.TextArea
          label="Party Description:"
          placeholder="Tell us more about your party..."
          onChange={e => this.setPartyDescription(e.target.value)}
        />

        <Form.Button>Submit</Form.Button>
        {console.log("props.state", this.props.state)}
        {console.log("state", this.state)}
      </Form>
    );
  }
}

export default NewPartyForm;
