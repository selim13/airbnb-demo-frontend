import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import bp from "../../../breakpoints";
import SeeAllButton from "../../../UI/SeeAllButton";

import internetSvg from "./internet.svg";
import wifiSvg from "./wifi.svg";
import kidsFriendlySvg from "./kidsFriendly.svg";
import parkingSvg from "./parking.svg";

const Property = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 23px;
    font-size: 16px;
  }
`;

const Icon = styled.img`
  margin-right: 8px;

  @media (min-width: ${bp.sm}px) {
    margin-right: 12px;
  }
`;

export default function() {
  return (
    <div>
      <Row>
        <Col xs={6}>
          <Property>
            <Icon src={internetSvg} /> Internet
          </Property>
        </Col>
        <Col xs={6}>
          <Property>
            <Icon src={kidsFriendlySvg} /> Family/kid friendly
          </Property>
        </Col>
        <Col xs={6}>
          <Property>
            <Icon src={wifiSvg} /> Wireless Internet
          </Property>
        </Col>
        <Col xs={6}>
          <Property>
            <Icon src={parkingSvg} /> Free parking on premises
          </Property>
        </Col>
      </Row>

      <SeeAllButton label="Show all amenities" />
    </div>
  );
}
