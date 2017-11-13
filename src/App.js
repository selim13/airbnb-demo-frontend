import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Front from "./Front";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <main>
            <Route exact path="/" component={Front} />
            <Route path="/homes" component={Homes} />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
