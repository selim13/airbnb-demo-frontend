import React from "react";
import styled from "styled-components";

import Container from "../Container";
import SectionHeading from "../SectionHeading";

import homeImg from "./homes.png";
import expImg from "./experiences.png";
import restaurantsImg from "./restaurants.png";

const ExploreList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ExploreLink = styled.a`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  font-family: CircularAir;
  font-size: 17px;
  font-weight: bold;
  color: #383838;
  text-decoration: none;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
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

        <div className="row">
          <div className="col-md-4">
            <ExploreLink href="#">
              <Image src={homeImg} width="192" height="144" alt="" />
              Homes
            </ExploreLink>
          </div>
          <div className="col-md-4">
            <ExploreLink href="#">
              <Image src={expImg} width="192" height="144" alt="" />
              Experiences
            </ExploreLink>
          </div>
          <div className="col-md-4">
            <ExploreLink href="#">
              <Image src={restaurantsImg} width="192" height="144" alt="" />
              Restaurants
            </ExploreLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
