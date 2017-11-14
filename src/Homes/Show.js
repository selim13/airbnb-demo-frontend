import React from "react";

import Container from "../Container";

export default function({ match }) {
  return (
    <Container>Stub for the home's #{match.params.id} detail page.</Container>
  );
}
