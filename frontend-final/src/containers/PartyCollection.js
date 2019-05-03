import React, { Component } from "react";
import PartyNavBar from "./PartyNavBar";
import PartyDisplayPane from "./PartyDisplayPane";

class PartyCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "allParties" };
  }

  updateSelection = state => {
    this.setState({ activeItem: state.activeItem });
  };

  render() {
    return (
      <div id="party-section" className="center aligned">
        <PartyNavBar updateSelection={this.updateSelection} />
        <PartyDisplayPane
          selected={this.state.activeItem}
          parties={this.props.parties}
          newAttendance={this.props.newAttendance}
        />
      </div>
    );
  }
}

export default PartyCollection;
