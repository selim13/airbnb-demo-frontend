import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bp from '../breakpoints';

const Card = styled(Link)`
  font-size: 13px;
  color: #383838;
  text-decoration: none;

  @media (min-width: ${bp.sm}px) {
    width: 229px;
    font-size: 15px;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;
const Category = styled.p`
  margin: 0;
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: ${bp.sm}px) {
    font-size: 10px;
  }
`;
const Heading = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: ${bp.sm}px) {
    font-size: 18px;
  }
`;
const Price = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  mix-blend-mode: normal;
  opacity: 0.9;

  @media (min-width: ${bp.sm}px) {
    font-size: 19px;
  }
`;

export default function ({
  id, name, image, category, price,
}) {
  return (
    <Card to={`/restaurants/${id}`}>
      <Image src={image} width="458" height="238" alt="" />
      <Category>{category}</Category>
      <Heading>{name}</Heading>
      <Price>About ${price} per person</Price>
    </Card>
  );
}
