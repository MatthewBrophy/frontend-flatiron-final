import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class NewPartyForm extends Component {
  state = {
    partyName: "",
    partyTheme: "",
    partyDescription: ""
  };

  setPartyName = info => this.setState({ partyName: info });
  setPartyTheme = info => this.setState({ partyTheme: info });
  setPartyDescription = info => this.setState({ partyDescription: info });

  render() {
    return (
      <Form className="ui center aligned" id="new-party-form">
        <Form.Group className="ui center aligned">
          <p id="form-title">Host a New Party!</p>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Party Name"
            placeholder="Party Name"
            onChange={e => this.setPartyName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Party Theme"
            placeholder="Theme Your Party!"
            onChange={e => this.setPartyTheme(e.target.value)}
          />
        </Form.Group>

        <Form.TextArea
          label="Description"
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
