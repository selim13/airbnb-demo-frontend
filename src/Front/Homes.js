import React from "react";

import bp from "../breakpoints";
import { Slider, Slide } from "../UI/Slider";
import Card from "../Homes/Card";

import data from "../Homes/staticData";

const HomeSlide = Slide.extend`
  max-width: 197px;
  @media (min-width: ${bp.md}px) {
    max-width: 320px;
  }
`;

export default function() {
  const homesList = data.map(home => (
    <HomeSlide key={home.id}>
      <Card
        id={home.id}
        name={home.name}
        image={home.image}
        price={home.price}
        roomType={home.roomType}
        bedsNumber={home.bedsNumber}
        reviews={home.reviews}
      />
    </HomeSlide>
  ));

  return <Slider hasDesktopNavigation>{homesList}</Slider>;
}
