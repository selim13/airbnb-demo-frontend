import React from "react";

import Slider from "../Slider";
import Card from "./Card";

import data from "./staticData";

export default function() {
  const homesList = data.map(home => (
    <Card
      key={home.id}
      id={home.id}
      name={home.name}
      image={home.image}
      price={home.price}
      roomType={home.roomType}
      bedsNumber={home.bedsNumber}
      reviews={home.reviews}
    />
  ));

  return <Slider hasDesktopNavigation>{homesList}</Slider>;
}
