import React from 'react';

import bp from '../breakpoints';
import { Slider, Slide } from '../UI/Slider';
import Card from '../Restaurants/Card';

import data from '../Restaurants/staticData';

const ReservationSlide = Slide.extend`
  max-width: 144px;
  @media (min-width: ${bp.sm}px) {
    max-width: 232px;
  }
`;

export default function () {
  const restaurantsList = data.map(restaurant => (
    <ReservationSlide key={restaurant.id}>
      <Card
        id={restaurant.id}
        name={restaurant.name}
        image={restaurant.image}
        category={restaurant.category}
        price={restaurant.price}
      />
    </ReservationSlide>
  ));

  return <Slider hasDesktopNavigation>{restaurantsList}</Slider>;
}
