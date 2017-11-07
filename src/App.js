import React, { Component } from "react";
import styled from "styled-components";

import Topbar from "./Topbar/Topbar";
import Explore from "./Explore/Explore";
import Experinces from "./Experiences/Experiences";

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
            <Experinces />
          </Section>
        </main>
      </div>
    );
  }
}

export default App;
