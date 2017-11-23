import React from "react";
import styled from "styled-components";

import { Row, Col } from "react-flexbox-grid";
import { Link, SectionParagraph } from "../styled";

import shieldSvg from "./shield.svg";

const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #383838;
`;

const ShieldImg = styled.img`
  margin-left: 1rem;
`;

const Hr = styled.hr`
  max-width: 65px;
  height: 1px;
  margin: 4px 0 20px;
  border: none;
  color: rgba(118, 118, 118, 0.2);
  background-color: rgba(118, 118, 118, 0.2);
`;

const BottomParagraph = SectionParagraph.extend`
  margin-bottom: 4px;
`;

export default function() {
  return (
    <div>
      <Row>
        <Col xs={10}>
          <Heading>Free cancellation</Heading>
          <SectionParagraph>
            Cancel within 48 hours of booking to get a full refund.
          </SectionParagraph>
        </Col>
        <Col xs={2}>
          <ShieldImg src={shieldSvg} alt="" width="42" height="45" />
        </Col>
      </Row>

      <Hr />

      <SectionParagraph>Flexible</SectionParagraph>

      <BottomParagraph>
        Cancel up to 24 hours before check in and get a full refund (minus
        service fees). Cancel within 24 hours of your trip and the firs…{" "}
        <Link href="#">Read more</Link>
      </BottomParagraph>
    </div>
  );
}
