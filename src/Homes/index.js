import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Rating from "../Rating";
import Slider from "../Slider";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Card = styled.a`
  display: block;
  min-width: 310px;
  margin: 0 8px;
  font-size: 15px;
  color: #383838;
  text-decoration: none;
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;
const Heading = styled.span`font-weight: bold;`;
const Description = styled.div`font-weight: 300;`;

export default function() {
  return (
    <div>
      <Container>
        <SectionHeading href="#">Homes</SectionHeading>
      </Container>
      <Slider hasDesktopNav imagesHeight="204">
        <Card href="#">
          <Image src={img1} width="310" height="204" alt="" />
          <div>
            <b>$82</b> <Heading>La Salentina, see, nature &amp; relax</Heading>
          </div>
          <Description>Entire house · 9 beds</Description>
          <Rating stars={4} number={97} label="Superhost" dot />
        </Card>

        <Card href="#">
          <Image src={img2} width="310" height="204" alt="" />
          <div>
            <b>$82</b> <Heading>Your private 3 bedr. riad and exclusi…</Heading>
          </div>
          <Description>Entire house · 9 beds</Description>
          <Rating stars={5} number={161} label="Superhost" dot />
        </Card>

        <Card href="#">
          <Image src={img3} width="310" height="204" alt="" />
          <div>
            <b>$200</b> <Heading>Dreamy Tropical Tree House</Heading>
          </div>
          <Description>Entire house · 9 beds</Description>
          <Rating stars={5} number={364} label="Superhost" dot />
        </Card>
      </Slider>
    </div>
  );
}
