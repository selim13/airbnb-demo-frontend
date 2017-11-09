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
  min-width: 229px;
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
const Category = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Heading = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;
const Description = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
`;

export default function() {
  return (
    <div>
      <Container>
        <SectionHeading href="#">
          Popular reservations around the world
        </SectionHeading>
      </Container>
      <Slider hasDesktopNav imagesHeight="161">
        <Card href="#">
          <Image src={img1} width="229" height="161" alt="" />
          <Category>Speakeasy</Category>
          <Heading>Chumley’s</Heading>
          <Description>About $60 per person</Description>
        </Card>

        <Card href="#">
          <Image src={img2} width="229" height="161" alt="" />
          <Category>Korean gastropub</Category>
          <Heading>Hanjan</Heading>
          <Description>About $50 per person</Description>
        </Card>

        <Card href="#">
          <Image src={img3} width="229" height="161" alt="" />
          <Category>German american</Category>
          <Heading>Prime Meats</Heading>
          <Description>About $55 per person</Description>
        </Card>

        <Card href="#">
          <Image src={img4} width="229" height="161" alt="" />
          <Category>Fine seafood</Category>
          <Heading>Seaprice</Heading>
          <Description>About $70 per person</Description>
        </Card>
      </Slider>
    </div>
  );
}
