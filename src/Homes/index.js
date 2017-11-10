import React from "react";
import styled from "styled-components";

import Section from "../Section";
import Reviews from "../Reviews";
import Slider from "../Slider";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Card = styled.a`
  display: block;
  width: 197px;
  margin: 0 8px;
  font-size: 13px;
  color: #383838;
  text-decoration: none;

  @media (min-width: 660px) {
    width: 310px;
    font-size: 15px;
  }
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;
const Heading = styled.p`
  margin: 0;
  font-weight: bold;
`;
const Description = styled.p`
  margin: 0;
  font-weight: 300;
`;

export default function() {
  return (
    <Section title="Homes" href="#">
      <Slider hasDesktopNavigation>
        <Card href="#">
          <Image src={img1} width="310" height="204" alt="" />
          <Heading>$82 La Salentina, see, nature &amp; relax</Heading>
          <Description>Entire house · 9 beds</Description>
          <Reviews rating={4} number={97} status="Superhost" />
        </Card>

        <Card href="#">
          <Image src={img2} width="310" height="204" alt="" />
          <Heading>$82 Your private 3 bedr. riad and exclusi…</Heading>
          <Description>Entire house · 9 beds</Description>
          <Reviews rating={5} number={161} status="Superhost" />
        </Card>

        <Card href="#">
          <Image src={img3} width="310" height="204" alt="" />
          <Heading>$200 Dreamy Tropical Tree House</Heading>
          <Description>Entire house · 9 beds</Description>
          <Reviews rating={5} number={364} status="Superhost" />
        </Card>
      </Slider>
    </Section>
  );
}
