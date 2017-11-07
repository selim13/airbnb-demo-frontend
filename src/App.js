import React, { Component } from "react";
import Topbar from "./Topbar/Topbar";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Content />
      </div>
    );
  }
}

export default App;
