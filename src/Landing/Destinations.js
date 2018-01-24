import React from 'react';

import bp from '../breakpoints';
import { Slider, Slide } from '../UI/Slider';
import Card from '../Destinations/Card';

import data from '../Destinations/staticData';

const DestinationsSlide = Slide.extend`
  max-width: 91px;
  @media (min-width: ${bp.sm}px) {
    max-width: 149px;
  }
`;

export default function () {
  const destinationsList = data.map(destination => (
    <DestinationsSlide key={destination.code}>
      <Card code={destination.code} name={destination.name} image={destination.image} />
    </DestinationsSlide>
  ));
  return <Slider hasDesktopNavigation>{destinationsList}</Slider>;
}
