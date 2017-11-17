import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import bp from "../breakpoints";
import Reviews from "../UI/Reviews";

const Card = styled(Link)`
  font-size: 13px;
  color: #383838;
  text-decoration: none;

  @media (min-width: ${bp.sm}px) {
    font-size: 15px;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
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

  @media (min-width: ${bp.sm}px) {
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
      <Image src={image} width="738" height="494" alt="" />
      <Heading>
        ${price} {name}
      </Heading>
      <Description>
        {roomType} · {bedsNumber} beds
      </Description>
      <Reviews
        rating={reviews.rating}
        count={reviews.count}
        status={reviews.status}
      />
    </Card>
  );
}
