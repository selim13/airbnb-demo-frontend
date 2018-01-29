import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Section from '../UI/Section';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Reservations from './Reservations';
import Destinations from './Destinations';

export default function () {
  return (
    <div>
      <Navbar searchPlaceholder="Try &quot;Miami&quot;" />

      <main>
        <Section title="Explore Airbnb">
          <Explore />
        </Section>
        <Section title="Experiences" to="/experiences">
          <Experiences />
        </Section>
        <Section title="Homes" to="/homes">
          <Homes />
        </Section>
        <Section title="Popular reservations around the world" to="/restaurants">
          <Reservations />
        </Section>
        <Section title="Featured destinations">
          <Destinations />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
