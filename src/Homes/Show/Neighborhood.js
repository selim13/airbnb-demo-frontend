import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

import bp from "../../breakpoints";
import SeeAllButton from "../../UI/SeeAllButton";

const Wrap = styled.div`
  margin-bottom: 16px;
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

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 18px;
  font-weight: 300;
`;

export default function() {
  return (
    <Wrap>
      <Heading>The neighborhood</Heading>

      <Description>
        Yudy &amp; Victoria’s home is located in Armenia, Quindio, Colombia..
      </Description>

      <Description>
        We are situated in the heart of the coffee region in the Andean
        mountains in Colombia. We are in "Vereda La Pradera" neighborhood, near
        the small town of "El Caimo", 20 minutes from Armenia and 20 minutes
        from the airport, by car. Close enough for comfort and easy access, far
        enough from the hustle of traffic and city noise that you can commune
        with nature. Sleep to the sound of the crickets and awaken to the sound
        of birds.
      </Description>

      <SeeAllButton label="Read more about neighborhood" />
    </Wrap>
  );
}
