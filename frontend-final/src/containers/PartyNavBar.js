import React, { Component, Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { Responsive } from "semantic-ui-react";

export default class PartyNavBar extends Component {
  state = { activeItem: "allParties" };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name }, async () =>
      this.props.updateSelection(this.state)
    );

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <Responsive as={Fragment} minWidth={900}>
          <Menu id="party-nav-bar">
            <p id="nav-bar-title">Parties</p>

            <Menu.Item
              id="party-bar-item"
              className="green item"
              name="allParties"
              active={activeItem === "allParties"}
              onClick={this.handleItemClick}
            >
              All Parties
            </Menu.Item>

            <Menu.Item
              id="party-bar-item"
              className="green item"
              name="soonestParties"
              active={activeItem === "soonestParties"}
              onClick={this.handleItemClick}
            >
              Soonest Parties
            </Menu.Item>

            <Menu.Item
              id="party-bar-item"
              className="green item"
              name="sponsoredParties"
              active={activeItem === "sponsoredParties"}
              onClick={this.handleItemClick}
            >
              Sponsored Parties
            </Menu.Item>

            <Menu.Item
              id="party-bar-host"
              name="hostAParty"
              active={activeItem === "hostAParty"}
              onClick={this.handleItemClick}
              as={Link}
              to="/host-a-party"
            >
              Host A Party
            </Menu.Item>
          </Menu>
        </Responsive>
        <Responsive as={Fragment} maxWidth={900}>
          <Menu id="party-nav-bar">
            <p id="nav-bar-title">Parties</p>

            <Menu.Item
              id="party-bar-item"
              className="green item"
              name="allParties"
              active={activeItem === "allParties"}
              onClick={this.handleItemClick}
            >
              All
            </Menu.Item>

            <Menu.Item
              id="party-bar-item"
              className="green item"
              name="soonestParties"
              active={activeItem === "soonestParties"}
              onClick={this.handleItemClick}
            >
              Soonest
            </Menu.Item>

            <Menu.Item
              id="party-bar-item"
              className="green item"
              name="sponsoredParties"
              active={activeItem === "sponsoredParties"}
              onClick={this.handleItemClick}
            >
              Sponsored
            </Menu.Item>

            <Menu.Item
              id="party-bar-host"
              name="hostAParty"
              active={activeItem === "hostAParty"}
              onClick={this.handleItemClick}
              as={Link}
              to="/host-a-party"
            >
              Host
            </Menu.Item>
          </Menu>
        </Responsive>
      </Fragment>
    );
  }
}
