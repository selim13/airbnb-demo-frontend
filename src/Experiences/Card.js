import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bp from '../breakpoints';
import Reviews from '../UI/Reviews';

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
  font-weight: 300;
`;
const Price = styled.span`
  font-weight: bold;
`;

export default function ({
  id, name, image, price, reviews = {},
}) {
  return (
    <Card to={`/experiences/${id}`}>
      <Image src={image} width="458" height="694" alt="" />
      <Heading>
        <Price>${price}</Price> {name}
      </Heading>
      <Reviews rating={reviews.rating} count={reviews.count} label="reviews" />
    </Card>
  );
}
