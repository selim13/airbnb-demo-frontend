import React from "react";
import styled from "styled-components";

import Reviews from "../Reviews";
import Slider from "../Slider";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Card = styled.a`
  flex: 0 0 auto;
  display: block;
  width: 144px;
  margin: 0 8px;
  font-size: 13px;
  color: #383838;
  text-decoration: none;

  @media (min-width: 670px) {
    width: 229px;
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
  font-weight: 300;
`;

export default function() {
  return (
    <Slider hasDesktopNavigation>
      <Card href="#">
        <Image src={img1} width="229" height="347" alt="" />
        <Heading>
          <b>$29</b> Forest therapy
        </Heading>
        <Reviews rating={4} number={44} label="reviews" />
      </Card>

      <Card href="#">
        <Image src={img2} width="229" height="347" alt="" />
        <Heading>
          <b>$29</b> Whale watching
        </Heading>
        <Reviews rating={5} number={146} label="reviews" />
      </Card>

      <Card href="#">
        <Image src={img3} width="229" height="347" alt="" />
        <Heading>
          <b>$29</b> Table Mountain Summit, Cable Car Down
        </Heading>
        <Reviews rating={5} number={44} label="reviews" />
      </Card>

      <Card href="#">
        <Image src={img4} width="229" height="347" alt="" />
        <Heading>
          <b>$50</b> Salsa Night
        </Heading>
        <Reviews rating={5} number={44} label="reviews" />
      </Card>
    </Slider>
  );
}
