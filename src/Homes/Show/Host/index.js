import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import bp from '../../../breakpoints';
import ReadMoreText from '../../../UI/ReadMoreText';
import Avatar from '../Avatar';

import avatarImg from '../avatar.png';
import verifiedImg from './verified.png';

const Wrap = styled.div`
  padding-bottom: 48px;
`;

const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: ${bp.sm}px) {
    font-size: 28px;
    margin-bottom: 9px;
  }
`;

const Subheading = styled.p`
  margin-top: 0;
  margin-bottom: 18px;
  color: #636363;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 23px;
  }
`;

const Badges = styled.div`
  @media (min-width: ${bp.sm}px) {
    display: flex;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  margin-right: 33px;
  margin-bottom: 24px;
  color: #636363;
  font-size: 18px;
  font-weight: 300;
`;

const ReviewsCounter = styled.div`
  margin-right: 16px;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(
    137.16deg,
    rgba(255, 195, 51, 0.8) 5.46%,
    #ffc333 38.68%,
    #ffb400 38.76%,
    #ffb400 85.47%
  );
`;

const VerifiedIcon = styled.img`
  margin-right: 16px;
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 18px;
  font-weight: 300;
`;

const ContactButton = styled.button`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border: 1px solid #008489;
  border-radius: 2px;
  color: #0f7276;
  font-size: 14px;
  font-family: inherit;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  background: #ffffff;
`;

const Properties = styled.div`
  margin-top: 24px;
`;
const Property = styled.p`
  margin: 0;
  color: #383838;
  font-size: 18px;
  font-weight: 300;
`;
const PropertyValue = styled.span`
  font-weight: 400;
`;

export default function () {
  return (
    <Wrap>
      <Row>
        <Col xs={10}>
          <Heading>Hosted by Yudy &amp; Victoria</Heading>
          <Subheading>Santa Ana, California, United States · Joined in August 2014</Subheading>

          <Badges>
            <Badge>
              <ReviewsCounter>153</ReviewsCounter>Reviews
            </Badge>
            <Badge>
              <VerifiedIcon src={verifiedImg} alt="" width="32" height="32" />Verified
            </Badge>
          </Badges>
        </Col>
        <Col xs={2}>
          <Avatar image={avatarImg} superhost />
        </Col>
      </Row>

      <Description>
        <ReadMoreText lines={3}>
          Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and would be your hostess
          on the property. I live in California and am the owner of the property. It is my goal to
          create a &quot;boutique eco-resort&quot; on the approximately 5 acre farm we have in the
          coffee growing region in the Andean mountains. We have tried to create a retreat that will
          soothe your soul and rejuvenate your spirit. Yudy speaks fluent Spanish and some English,
          punctuated with laughter and hand gestures. She is warm, friendly, capable and a very good
          cook! Yudy will help you arrange transportation, reservations, tours, and anything you may
          need.
        </ReadMoreText>
      </Description>

      <ContactButton>Contact host</ContactButton>

      <Properties>
        {/* NOTE: dl, dt, dd? */}
        <Property>
          Languages: <PropertyValue>English, Español</PropertyValue>
        </Property>
        <Property>
          Response rate: <PropertyValue>100%</PropertyValue>
        </Property>
        <Property>
          Response time: <PropertyValue>within a few hours</PropertyValue>
        </Property>
      </Properties>
    </Wrap>
  );
}
