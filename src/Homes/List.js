import React from "react";

import Container from "../Container";
import { Grid, Row, Col } from "react-flexbox-grid";
import Card from "./Card";

import data from "./staticData";

export default function() {
  const homesList = data.map(home => (
    <Col md={6}>
      <Card
        key={home.id}
        id={home.id}
        name={home.name}
        image={home.image}
        price={home.price}
        roomType={home.roomType}
        bedsNumber={home.bedsNumber}
        reviews={home.reviews}
      />
    </Col>
  ));

  return (
    <Container>
      <Row>{homesList}</Row>
    </Container>
  );
}
