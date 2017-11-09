import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Slider from "../Slider";

import homeImg from "./homes.png";
import expImg from "./experiences.png";
import restaurantsImg from "./restaurants.png";

const Link = styled.a`
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-width: 310px;
  margin: 0 8px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  font-family: CircularAir;
  font-size: 17px;
  font-weight: bold;
  color: #383838;
  text-decoration: none;
  background: #ffffff;
`;
const Image = styled.img`
  display: block;
  width: 96px;
  height: auto;
  margin-right: 24px;
`;

export default function() {
  return (
    <div>
      <Container>
        <SectionHeading>Explore Airbnb</SectionHeading>
      </Container>
      <Slider>
        <Link href="#">
          <Image src={homeImg} width="192" height="144" alt="" />
          Homes
        </Link>

        <Link href="#">
          <Image src={expImg} width="192" height="144" alt="" />
          Experiences
        </Link>

        <Link href="#">
          <Image src={restaurantsImg} width="192" height="144" alt="" />
          Restaurants
        </Link>
      </Slider>
    </div>
  );
}
