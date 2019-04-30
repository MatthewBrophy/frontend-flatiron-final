import React, { Component } from "react";

class PartyDisplayPane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        {console.log("props at display pane", this.props)}
        {this.props.selected === "allParties"
          ? console.log("your mom")
          : this.props.selected === "soonestParties"
          ? console.log("Your mom soon")
          : this.props.selected === "newestParties"
          ? console.log("Your newest mom")
          : this.props.selected === "sponsoredParties"
          ? console.log("ooooh your mom is sponsored")
          : null}
      </div>
    );
  }
}

export default PartyDisplayPane;
