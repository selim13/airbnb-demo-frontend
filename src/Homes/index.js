import React from "react";
import { Route } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Hidden from "../Hidden";
import List from "./List";
import Show from "./Show";

export default function() {
  return (
    <div>
      <Navbar />

      <main>
        <Route exact path="/homes" component={List} />
        <Route exact path="/homes/:id" component={Show} />
      </main>

      <Hidden>
        <Footer />
      </Hidden>
    </div>
  );
}
