import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ScrollToTop from "./UI/ScrollToTop";
import Landing from "./Landing";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
