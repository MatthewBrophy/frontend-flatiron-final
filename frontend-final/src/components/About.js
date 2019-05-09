import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderBar from "../containers/HeaderBar";
import { Container, Icon } from "semantic-ui-react";
import MattPic from "../images/Matt_pic.jpg";

class About extends Component {
  state = {};
  render() {
    return (
      <Container>
        <HeaderBar />
        <Container className="center aligned">
          <p id="about-title">About</p>
        </Container>
        <Container className="ui">
          <p id="about-header">About Neighborfood</p>
        </Container>
        <Container className="about-content" id="about-content">
          <p>
            Hunger is a major problem in the United States. For those in need, a
            home-cooked, nutritious meal is even more difficult to come by:
          </p>

          <ul>
            <li>
              In 2017, 40 million people struggled with hunger in the United
              States.
            </li>
            <li>
              The USDA defines "food insecurity" as the lack of access, at
              times, to enough food for all household members. In 2017, an
              estimated 15 million households were food insecure.
            </li>
            <li>
              The USDA defines "food insecurity" as the lack of access, at
              times, to enough food for all household members. In 2017, an
              estimated 15 million households were food insecure.
            </li>
          </ul>
          <p>
            Neighborfood was created with a vision to help hungry people get
            warm, home-cooked meals to eat. Through community events, neighbors
            can host or attend gatherings to eat, drink, and become closer to
            one another. Regardless of background, everyone on this planet
            shares a common thread - we need to eat. Food is a central part of
            most communities around the world so it only feels natural to use it
            as a catalyst and center point for neighborhood togetherness.
          </p>
        </Container>
        <Container className="ui">
          <p id="about-header">About the Creator</p>
        </Container>
        <Container id="creator-content">
          <img src={MattPic} alt="Creator Pic" id="creator-pic" />
          <p id="creator-info">
            My name is Matt Brophy and I am a recent graduate of the Flatiron
            School - Immersive Web Development Program. I have a strong passion
            for helping others and look forward to building my development
            skills to better serve my community. I am married, have two cute
            cats, and currently call Shoreline, WA my home.{" "}
          </p>{" "}
          <a href="https://www.linkedin.com/in/matthewbrophy/" target="_blank">
            <button className="ui linkedin button">
              <i class="linkedin icon" />
              LinkedIn
            </button>
          </a>
          <a href="https://github.com/MatthewBrophy" target="_blank">
            <button className="ui github button" id="creator-links">
              <i class="github icon" />
              GitHub
            </button>
          </a>
        </Container>
      </Container>
    );
  }
}

export default About;
