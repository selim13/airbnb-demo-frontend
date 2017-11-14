import React from "react";

import { Slider } from "../UI/Slider";
import Card from "./Card";

import data from "./staticData";

export default function() {
  const destinationsList = data.map(destination => (
    <Card
      key={destination.code}
      code={destination.code}
      name={destination.name}
      image={destination.image}
    />
  ));
  return <Slider hasDesktopNavigation>{destinationsList}</Slider>;
}
