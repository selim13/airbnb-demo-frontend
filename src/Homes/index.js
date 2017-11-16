import React from "react";
import { Route } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";
import VisuallyHidden from "../UI/VisuallyHidden";
import List from "./List";
import Show from "./Show";

export default function() {
  return (
    <div>
      <Navbar searchPlaceholder="Anywhere &middot; Homes" />

      <main>
        <Route exact path="/homes" component={List} />
        <Route exact path="/homes/:id" component={Show} />
      </main>

      <VisuallyHidden>
        <Footer />
      </VisuallyHidden>
    </div>
  );
}
