import React, { Component } from "react";

import Navbar from "./Navbar";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <main>
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
