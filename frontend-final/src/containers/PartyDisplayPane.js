import React, { Component } from "react";

class PartyDisplayPane extends Component {
  render() {
    return (
      <div className="row">
        {console.log("state at party display", this.props)}Party Display Pane
      </div>
    );
  }
}

export default PartyDisplayPane;
