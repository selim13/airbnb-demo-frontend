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
import img4 from "./4.png";

const Card = styled.a`
  display: block;
  width: 144px;
  min-width: 144px;
  margin: 0 8px;
  font-size: 13px;
  color: #383838;
  text-decoration: none;

  @media (min-width: 670px) {
    width: 229px;
    min-width: 229px;
    font-size: 15px;
  }
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;
const Heading = styled.span`font-weight: 300;`;

export default function() {
  return (
    <div>
      <Container>
        <SectionHeading href="#">Experiences</SectionHeading>
      </Container>
      <Slider hasDesktopNav imagesHeight="347">
        <Card href="#">
          <Image src={img1} width="229" height="347" alt="" />
          <div>
            <b>$29</b> <Heading>Forest therapy</Heading>
          </div>
          <Rating stars={4} number={44} label="reviews" />
        </Card>

        <Card href="#">
          <Image src={img2} width="229" height="347" alt="" />
          <div>
            <b>$29</b> <Heading>Whale watching</Heading>
          </div>
          <Rating stars={5} number={146} label="reviews" />
        </Card>

        <Card href="#">
          <Image src={img3} width="229" height="347" alt="" />
          <div>
            <b>$29</b> <Heading>Table Mountain Summit, Cable Car Down</Heading>
          </div>
          <Rating stars={5} number={44} label="reviews" />
        </Card>

        <Card href="#">
          <Image src={img4} width="229" height="347" alt="" />
          <div>
            <b>$50</b> <Heading>Salsa Night</Heading>
          </div>
          <Rating stars={5} number={44} label="reviews" />
        </Card>
      </Slider>
    </div>
  );
}
