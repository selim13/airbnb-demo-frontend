import React from "react";

import Section from "./Section";
import Explore from "../Explore";
import Experiences from "../Experiences";
import HomesSlider from "../Homes/Slider";
import Reservations from "../Reservations";
import Destinations from "../Destinations";

export default function() {
  return (
    <div>
      <Section title="Explore Airbnb">
        <Explore />
      </Section>
      <Section title="Experiences" href="#">
        <Experiences />
      </Section>
      <Section title="Homes" href="/homes">
        <HomesSlider />
      </Section>
      <Section title="Popular reservations around the world" href="#">
        <Reservations />
      </Section>

      <Section title="Featured destinations">
        <Destinations />
      </Section>
    </div>
  );
}
