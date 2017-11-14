import React from "react";
import styled from "styled-components";

import bp from "../breakpoints";
import { Slider, Slide } from "../UI/Slider";
import Card from "./Card";

import data from "./staticData";

const HomeSlide = Slide.extend`
  max-width: 197px;
  @media (min-width: ${bp.md}px) {
    max-width: 320px;
  }
`;

export default function() {
  const homesList = data.map(home => (
    // FIXME: grid class on a styled component sux
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

  return (
    <Slider className="row" hasDesktopNavigation>
      {homesList}
    </Slider>
  );
}
