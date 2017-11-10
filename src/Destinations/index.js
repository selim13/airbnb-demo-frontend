import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Section from "../Section";
import Slider from "../Slider";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

const Card = styled.a`
  display: block;
  width: 91px;
  min-width: 91px;
  margin: 0 8px;
  font-size: 15px;
  color: #383838;
  text-decoration: none;

  @media (min-width: 670px) {
    width: 147px;
    min-width: 147px;
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
  font-size: 12px;
  font-weight: bold;

  @media (min-width: 670px) {
    font-size: 15px;
  }
`;

export default function() {
  return (
    <Section title="Featured destinations" href="#">
      <Slider hasDesktopNav imagesHeight="220">
        <Card href="#">
          <Image src={img1} width="147" height="220" alt="" />
          <Heading>Paris</Heading>
        </Card>

        <Card href="#">
          <Image src={img2} width="147" height="220" alt="" />
          <Heading>Miami</Heading>
        </Card>

        <Card href="#">
          <Image src={img3} width="147" height="220" alt="" />
          <Heading>Tokyo</Heading>
        </Card>

        <Card href="#">
          <Image src={img4} width="147" height="220" alt="" />
          <Heading>Cape town</Heading>
        </Card>

        <Card href="#">
          <Image src={img5} width="147" height="220" alt="" />
          <Heading>Seoul</Heading>
        </Card>

        <Card href="#">
          <Image src={img6} width="147" height="220" alt="" />
          <Heading>Los Angeles</Heading>
        </Card>
      </Slider>
    </Section>
  );
}
