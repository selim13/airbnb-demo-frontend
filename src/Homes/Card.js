import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Reviews from "../Reviews";

const Card = styled(Link)`
  font-size: 13px;
  color: #383838;
  text-decoration: none;

  @media (min-width: 660px) {
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
  overflow: hidden;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  max-height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 660px) {
    font-size: 15px;
    line-height: 21px;
    max-height: 21px;
  }
`;
const Description = styled.p`
  margin: 0;
  font-weight: 300;
`;

export default function({
  id,
  name,
  image,
  price,
  roomType,
  bedsNumber,
  reviews = {}
}) {
  return (
    <Card to={"/homes/" + id}>
      <Image src={image} width="368" height="204" alt="" />
      <Heading>
        ${price} {name}
      </Heading>
      <Description>
        {roomType} · {bedsNumber} beds
      </Description>
      <Reviews
        rating={reviews.rating}
        number={reviews.number}
        status={reviews.status}
      />
    </Card>
  );
}
