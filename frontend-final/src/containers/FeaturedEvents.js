import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import FeaturedPartyCard from "../components/FeaturedPartyCard";
import { Segment } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";

class FeaturedEvents extends Component {
  constructor(props) {
    super(props);
    this.sponsoredEvents = this.props.parties.allParties.filter(
      party => party.sponsored === true
    );
  }

  render() {
    return (
      <Segment id="sponsored-display">
        <p id="featured-title">Featured Events!</p>

        <CarouselProvider
          id="Carousel"
          naturalSlideWidth={100}
          naturalSlideHeight={98.5}
          totalSlides={this.sponsoredEvents.length}
        >
          <Slider>
            {this.sponsoredEvents.map((party, index) => (
              <Slide index={index} key={index}>
                <FeaturedPartyCard
                  details={party}
                  newAttendance={this.props.newAttendance}
                  user={this.props.user}
                />
              </Slide>
            ))}
          </Slider>
          <ButtonBack id="carousel-back-button">{"<<<"}</ButtonBack>
          <ButtonNext id="carousel-next-button">{">>>"}</ButtonNext>
        </CarouselProvider>
      </Segment>
    );
  }
}

export default FeaturedEvents;
{
  /* <p> Featured Events! </p>
{this.props.parties.allParties
  .filter(party => party.sponsored === true)
  .map(party => (
    <FeaturedPartyCard details={party} key={party.id} />
  ))} */
}
