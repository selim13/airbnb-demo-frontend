import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Slider from "../Slider";

import homeImg from "./homes.png";
import expImg from "./experiences.png";
import restaurantsImg from "./restaurants.png";

const Card = styled.a`
  min-width: 144px;
  margin: 4px 8px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  text-decoration: none;
  background: #ffffff;

  @media (min-width: 490px) {
    display: flex;
    align-items: center;
    min-width: 310px;
  }
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: -1px;
  border-radius: 4px 4px 0 0;

  @media (min-width: 490px) {
    width: 96px;
    border-radius: 4px 0 0 4px;
  }
`;
const Heading = styled.div`
  padding: 1rem 1.5rem;
  font-size: 12px;
  font-weight: bold;
  color: #383838;

  @media (min-width: 490px) {
    font-size: 17px;
  }
`;

export default function() {
  return (
    <div>
      <Container>
        <SectionHeading>Explore Airbnb</SectionHeading>
      </Container>
      <Slider>
        <Card href="#">
          <Image src={homeImg} width="192" height="144" alt="" />
          <Heading>Homes</Heading>
        </Card>

        <Card href="#">
          <Image src={expImg} width="192" height="144" alt="" />
          <Heading>Experiences</Heading>
        </Card>

        <Card href="#">
          <Image src={restaurantsImg} width="192" height="144" alt="" />
          <Heading>Restaurants</Heading>
        </Card>
      </Slider>
    </div>
  );
}
