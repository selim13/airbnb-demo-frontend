import React from 'react';
import styled from 'styled-components';

import bp from '../../../breakpoints';
import Container from '../../../UI/Container';
import { Slider, Slide } from '../../../UI/Slider';
import Card from './Card';

import data from './staticData';

const RoomSlide = Slide.extend`
  max-width: 197px;
  @media (min-width: ${bp.sm}px) {
    max-width: 314px;
  }
`;

const Wrap = styled.div`
  margin-top: 40px;
  margin-bottom: 48px;
`;

const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 24px;
    font-size: 28px;
  }
`;

export default function () {
  const homesList = data.map(home => (
    <RoomSlide key={home.id}>
      <Card
        id={home.id}
        name={home.name}
        image={home.image}
        price={home.price}
        roomType={home.roomType}
        bedsNumber={home.bedsNumber}
        hot={home.hot}
        reviews={home.reviews}
      />
    </RoomSlide>
  ));

  return (
    <Wrap>
      <Container>
        <Heading>Similar listings</Heading>
      </Container>

      <Slider hasDesktopNavigation>{homesList}</Slider>
    </Wrap>
  );
}
