import React, { Component } from "react";
import NewPartyForm from "../components/NewPartyForm";
import HeaderBar from "./HeaderBar";

class UsersParties extends Component {
  render() {
    return (
      <div className="ui container center aligned" id="user-parties-container">
        <HeaderBar logout={this.props.logout} />
        <NewPartyForm state={this.props.state} />
      </div>
    );
  }
}

export default UsersParties;
