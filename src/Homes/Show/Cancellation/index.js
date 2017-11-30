import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import ReadMoreText from "../../../UI/ReadMoreText";
import { SectionParagraph } from "../styled";

import shieldSvg from "./shield.svg";

const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #383838;
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
          <img src={shieldSvg} alt="" width="42" height="45" />
        </Col>
      </Row>

      <Hr />

      <SectionParagraph>Flexible</SectionParagraph>

      <BottomParagraph>
        <ReadMoreText lines={2}>
          Cancel up to 24 hours before check in and get a full refund (minus
          service fees). Cancel within 24 hours of your trip and the first night
          is non-refundable. Service fees are refunded when cancellation happens
          before check in and within 48 hours of booking.
        </ReadMoreText>
      </BottomParagraph>
    </div>
  );
}
