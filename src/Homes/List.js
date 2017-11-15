import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import GoogleMapReact from "google-map-react";

import bp from "../breakpoints";
import Container from "../Container";
import Card from "./Card";
import Filters from "./Filters";
import Pagination from "../UI/Pagination";

import data from "./staticData";
import pinIconSvg from "./pinIcon.svg";

const CardWrap = styled.div`
  margin-bottom: 24px;
  @media (min-width: ${bp.md}px) {
    margin-bottom: 40px;
  }
`;
const Map = styled.aside`
  position: fixed;
  top: 135px;
  bottom: 0;
  right: 0;

  display: none;
  width: 33.33333%;
  padding-left: 8px;

  @media (min-width: ${bp.md}px) {
    display: block;
  }

  @media (min-width: ${bp.lg}px) {
    width: calc(50% - 165px);
  }
`;
const PaginationWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 40px;
  }

  @media (min-width: ${bp.md}px) {
    margin-top: 0;
  }
`;
const Info = styled.p`
  margin-bottom: 65px;
  font-size: 16px;
  color: #636363;
  text-align: center;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 40px;
  }
`;
const ToggleMapButton = styled.button`
  position: fixed;
  right: 8px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin-left: 8px;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  background: #ffffff url(${pinIconSvg}) center center no-repeat;
  user-select: none;
  cursor: pointer;

  @media (min-width: ${bp.md}px) {
    display: none;
  }
`;

export default function() {
  const homesList = data.map(home => (
    <Col xs={12} sm={6} key={home.id}>
      <CardWrap>
        <Card
          id={home.id}
          name={home.name}
          image={home.image}
          price={home.price}
          roomType={home.roomType}
          bedsNumber={home.bedsNumber}
          reviews={home.reviews}
        />
      </CardWrap>
    </Col>
  ));

  return (
    <div>
      <Filters />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Row>{homesList}</Row>
            <Row center="xs">
              <Col xs={12}>
                <PaginationWrap>
                  <Pagination />
                </PaginationWrap>
                <Info>
                  Enter dates to see full pricing. Additional fees apply. Taxes
                  may be added.
                </Info>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Map>
        <GoogleMapReact
          defaultCenter={{ lat: 57.307, lng: 15.53 }}
          defaultZoom={5}
        />
      </Map>
      <ToggleMapButton title="Show map" />
    </div>
  );
}
