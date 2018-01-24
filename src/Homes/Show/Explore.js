import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import bp from '../../breakpoints';
import DotSeparator from '../../UI/DotSeparator';

export const Link = styled.a`
  color: #636363;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrap = styled.div`
  margin-bottom: 48px;
`;

const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: ${bp.sm}px) {
    font-size: 28px;
  }
`;

const PlacesRow = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  color: #383838;

  @media (min-width: ${bp.md}px) {
    display: flex;
    align-items: center;
  }
`;

const Places = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #636363;

  @media (min-width: ${bp.md}px) {
    margin-left: 8px;
  }
`;

const MorePlaces = styled.div`
  margin-bottom: 16px;
`;

const MoreLink = Link.extend`
  display: block;
  margin-bottom: 2px;
  font-size: 12px;
  font-weight: 300;
  color: #636363;
`;

export default function () {
  return (
    <Wrap>
      <Heading>Explore other options in and around Armenia</Heading>

      <PlacesRow>
        More places to stay in Armenia:{' '}
        <Places>
          <Link href="#">Apartments</Link>
          <DotSeparator />
          <Link href="#">Houses</Link>
          <DotSeparator />
          <Link href="#">Beds &amp; Breakfasts</Link>
          <DotSeparator />
          <Link href="#">Lofts</Link>
          <DotSeparator />
          <Link href="#">Villas</Link>
        </Places>
      </PlacesRow>

      <Row>
        <Col xs={12} md={4}>
          <MorePlaces>
            <MoreLink href="#">Cartagena Vacation Rentals</MoreLink>
            <MoreLink href="#">Bucaramanga</MoreLink>
            <MoreLink href="#">Manuel Antonio</MoreLink>
            <MoreLink href="#">Cartagena De Indias (Distrito Turistico Y Cultural)</MoreLink>
            <MoreLink href="#">Quito</MoreLink>
            <MoreLink href="#">Santander de Quilichao</MoreLink>
          </MorePlaces>
        </Col>
        <Col xs={12} md={4}>
          <MorePlaces>
            <MoreLink href="#">San Andrés Vacation Rentals</MoreLink>
            <MoreLink href="#">Bogota</MoreLink>
            <MoreLink href="#">Santa Marta (Distrito Turistico Cultural E Historico)</MoreLink>
            <MoreLink href="#">Rionegro</MoreLink>
            <MoreLink href="#">Anapoima</MoreLink>
            <MoreLink href="#">Puerto Rico</MoreLink>
          </MorePlaces>
        </Col>
        <Col xs={12} md={4}>
          <MorePlaces>
            <MoreLink href="#">Willemstad Vacation Rentals</MoreLink>
            <MoreLink href="#">Cali</MoreLink>
            <MoreLink href="#">Chia</MoreLink>
            <MoreLink href="#">Ibague</MoreLink>
            <MoreLink href="#">Medellin</MoreLink>
            <MoreLink href="#">Tabio</MoreLink>
          </MorePlaces>
        </Col>
      </Row>
    </Wrap>
  );
}
