import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';
import { Paragraph, TextSubheading } from './styled';
import ReadMore from '../../UI/ReadMore';

const Wrap = styled.div`
  margin-bottom: 16px;
  color: #383838;
  font-size: 18px;
  font-weight: 300;
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

export default function Neighborhood() {
  return (
    <Wrap>
      <Heading>The neighborhood</Heading>

      <Paragraph>Yudy &amp; Victoria’s home is located in Armenia, Quindio, Colombia..</Paragraph>

      <Paragraph>
        We are situated in the heart of the coffee region in the Andean mountains in Colombia. We
        are in &quot;Vereda La Pradera&quot; neighborhood, near the small town of &quot;El
        Caimo&quot;, 20 minutes from Armenia and 20 minutes from the airport, by car. Close enough
        for comfort and easy access, far enough from the hustle of traffic and city noise that you
        can commune with nature. Sleep to the sound of the crickets and awaken to the sound of
        birds.
      </Paragraph>

      <ReadMore openLabel="Read more about neighborhood">
        <TextSubheading>The space</TextSubheading>
        <Paragraph>
          Getting around We are an easy taxi ride (20 mil pesos) to the bus station or the airport
          in Armenia. There is a bus from Armenia to El Caimo, only 7 minutes by car from our farm.
          Additionally we have a jeep and our neighbor acts as a taxi for our guests. We will help
          you get to where you need to go to see any of the local attractions you choose.
        </Paragraph>
      </ReadMore>
    </Wrap>
  );
}
