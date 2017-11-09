import React, { Component } from "react";
import styled from "styled-components";

import Topbar from "./Topbar";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

const Section = styled.section`margin: 48px 0;`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />

        <main>
          <Section>
            <Explore />
          </Section>
          <Section>
            <Experiences />
          </Section>
          <Section>
            <Homes />
          </Section>
          <Section>
            <Reservations />
          </Section>
          <Section>
            <Destinations />
          </Section>
        </main>

        {<Footer />}
      </div>
    );
  }
}

export default App;
