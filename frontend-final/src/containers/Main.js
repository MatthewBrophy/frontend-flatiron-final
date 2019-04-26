import React, { Component } from "react";
import HeaderBar from "./HeaderBar";
import ProfileDetails from "../components/ProfileDetails";
import UpcomingParties from "./UpcomingParties";
import FeaturedEvents from "./FeaturedEvents";
import PartyNavBar from "../components/PartyNavBar";
import PartyDisplayPane from "./PartyDisplayPane";
import RecipeNavBar from "../components/RecipeNavBar";
import RecipeDisplayPane from "./RecipeDisplayPane";

import {
  Container,
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <HeaderBar />

        <div className="ui two column divided grid">
          <div className="row">
            <div className="column center aligned">
              <ProfileDetails user={this.props.currentUser} />

              <UpcomingParties />
            </div>
            <div className="column center aligned">
              <FeaturedEvents />
            </div>
          </div>
        </div>

        <div className="ui grid">
          <PartyNavBar />
          <PartyDisplayPane />
        </div>

        <div className="ui grid">
          <RecipeNavBar />
          <RecipeDisplayPane />
        </div>
      </Container>
    );
  }
}

export default Main;
