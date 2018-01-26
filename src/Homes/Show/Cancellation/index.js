import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import ReadMoreText from '../../../UI/ReadMoreText';
import { Paragraph, ShortHr } from '../styled';

import shieldSvg from './shield.svg';

const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #383838;
`;
const BottomParagraph = Paragraph.extend`
  margin-bottom: 4px;
`;

export default function () {
  return (
    <div>
      <Row>
        <Col xs={10}>
          <Heading>Free cancellation</Heading>
          <Paragraph>Cancel within 48 hours of booking to get a full refund.</Paragraph>
        </Col>
        <Col xs={2}>
          <img src={shieldSvg} alt="" width="42" height="45" />
        </Col>
      </Row>

      <ShortHr />

      <Paragraph>Flexible</Paragraph>

      <BottomParagraph>
        <ReadMoreText lines={2}>
          Cancel up to 24 hours before check in and get a full refund (minus service fees). Cancel
          within 24 hours of your trip and the first night is non-refundable. Service fees are
          refunded when cancellation happens before check in and within 48 hours of booking.
        </ReadMoreText>
      </BottomParagraph>
    </div>
  );
}
