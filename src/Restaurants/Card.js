import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const Category = styled.p`
  margin: 0;
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 670px) {
    font-size: 10px;
  }
`;
const Heading = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 670px) {
    font-size: 18px;
  }
`;
const Price = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 300;

  @media (min-width: 670px) {
    font-size: 19px;
  }
`;

export default function({ id, name, image, category, price }) {
  return (
    <Card to={"/restaurants/" + id}>
      <Image src={image} width="229" height="161" alt="" />
      <Category>{category}</Category>
      <Heading>{name}</Heading>
      <Price>About ${price} per person</Price>
    </Card>
  );
}
