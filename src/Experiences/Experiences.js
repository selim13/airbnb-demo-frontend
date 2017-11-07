import React from "react";
import styled from "styled-components";

import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Rating from "../Rating";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Link = styled.a`
  display: block;
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

const Text = styled.span`font-weight: 300;`;

export default function() {
  return (
    <div>
      <Container>
        <SectionHeading href="#">Experiences</SectionHeading>

        <div className="row">
          <div className="col-md-3">
            <Link href="#">
              <Image src={img1} width="229" height="347" alt="" />
              <div>
                <b>$29</b> <Text>Forest therapy</Text>
              </div>
              <Rating stars={4} number={44} label="reviews" />
            </Link>
          </div>

          <div className="col-md-3">
            <Link href="#">
              <Image src={img2} width="229" height="347" alt="" />
              <div>
                <b>$29</b> <Text>Whale watching</Text>
              </div>
              <Rating stars={5} number={146} label="reviews" />
            </Link>
          </div>

          <div className="col-md-3">
            <Link href="#">
              <Image src={img3} width="229" height="347" alt="" />
              <div>
                <b>$29</b> <Text>Table Mountain Summit, Cable Car Down</Text>
              </div>
              <Rating stars={5} number={44} label="reviews" />
            </Link>
          </div>

          <div className="col-md-3">
            <Link href="#">
              <Image src={img4} width="229" height="347" alt="" />
              <div>
                <b>$50</b> <Text>Salsa Night</Text>
              </div>
              <Rating stars={5} number={44} label="reviews" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
