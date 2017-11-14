import React from "react";

import { Slider } from "../UI/Slider";
import Card from "./Card";

import data from "./staticData";

export default function() {
  const restaurantsList = data.map(restaurant => (
    <Card
      key={restaurant.id}
      id={restaurant.id}
      name={restaurant.name}
      image={restaurant.image}
      category={restaurant.category}
      price={restaurant.price}
    />
  ));

  return <Slider hasDesktopNavigation>{restaurantsList}</Slider>;
}
