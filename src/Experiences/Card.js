import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Reviews from "../UI/Reviews";

const Card = styled(Link)`
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

export default function({ id, name, image, price, reviews = {} }) {
  return (
    <Card to={"/experiences/" + id}>
      <Image src={image} width="229" height="347" alt="" />
      <Heading>
        <b>${price}</b> {name}
      </Heading>
      <Reviews
        rating={reviews.rating}
        number={reviews.number}
        label="reviews"
      />
    </Card>
  );
}
