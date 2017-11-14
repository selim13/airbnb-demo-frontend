import React from "react";

import Section from "./Section";
import Explore from "../Explore";
import Experiences from "../Experiences";
import HomesSlider from "../Homes/Slider";
import Restaurants from "../Restaurants";
import Destinations from "../Destinations";

export default function() {
  return (
    <div>
      <Section title="Explore Airbnb">
        <Explore />
      </Section>
      <Section title="Experiences" to="/experiences">
        <Experiences />
      </Section>
      <Section title="Homes" to="/homes">
        <HomesSlider />
      </Section>
      <Section title="Popular reservations around the world" to="/restaurants">
        <Restaurants />
      </Section>
      <Section title="Featured destinations">
        <Destinations />
      </Section>
    </div>
  );
}
