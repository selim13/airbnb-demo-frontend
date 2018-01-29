import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bp from '../breakpoints';

const Card = styled(Link)`
  font-size: 15px;
  color: #383838;
  text-decoration: none;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;
const Heading = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: bold;

  @media (min-width: ${bp.sm}px) {
    font-size: 15px;
  }
`;

export default function ({ code, name, image }) {
  return (
    <Card to={`/destination/${code}`}>
      <Image src={image} width="221" height="330" alt="" />
      <Heading>{name}</Heading>
    </Card>
  );
}
