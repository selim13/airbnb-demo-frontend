import React, { Component } from "react";
import styled from "styled-components";

import Topbar from "./Topbar";
import Explore from "./Explore";
import Experiences from "./Experiences";

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
        </main>
      </div>
    );
  }
}

export default App;
