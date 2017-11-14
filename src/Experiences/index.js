import React from "react";

import { Slider } from "../UI/Slider";
import Card from "./Card";

import data from "./staticData";

export default function() {
  const experiencesList = data.map(experience => (
    <Card
      key={experience.id}
      id={experience.id}
      name={experience.name}
      image={experience.image}
      price={experience.price}
      reviews={experience.reviews}
    />
  ));
  return <Slider hasDesktopNavigation>{experiencesList}</Slider>;
}
