import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import bp from '../../../breakpoints';
import Pagination from '../../../UI/Pagination';

import Search from './Search';
import Rating from './Rating';
import Review from './Review';

import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';

const Wrap = styled.div`
  padding-top: 24px;
  margin-bottom: 48px;
`;

const Section = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Heading = styled.div`
  margin-bottom: 24px;

  @media (min-width: ${bp.sm}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TotalReviewsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 0;
  }
`;

const TotalReviews = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 12px;
  font-size: 24px;
  font-weight: bold;
  color: #383838;

  @media (min-width: ${bp.sm}px) {
    margin-right: 16px;
    font-size: 28px;
  }
`;

const TypeRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  font-size: 18px;
  font-weight: 300;
`;

export default function () {
  return (
    <Wrap>
      <Section>
        <Heading>
          <TotalReviewsWrap>
            <TotalReviews>113 Reviews</TotalReviews>
            <Rating rating={5} largeStars />
          </TotalReviewsWrap>
          <Search placeholder="Search reviews" label="Search reviews" id="review-search" />
        </Heading>

        <Row>
          <Col xs={12} sm={6}>
            <TypeRating>
              Accuracy
              <Rating rating={5} />
            </TypeRating>
            <TypeRating>
              Communication
              <Rating rating={5} />
            </TypeRating>
            <TypeRating>
              Cleanliness
              <Rating rating={5} />
            </TypeRating>
          </Col>
          <Col xs={12} sm={6}>
            <TypeRating>
              Location
              <Rating rating={5} />
            </TypeRating>
            <TypeRating>
              Check In
              <Rating rating={5} />
            </TypeRating>
            <TypeRating>
              Value
              <Rating rating={5} />
            </TypeRating>
          </Col>
        </Row>
      </Section>

      <Review name="Marlee" date="November 2017" avatar={avatar1}>
        This was one of my favourite places we stayed in all on Colombia. A very peaceful setting
        and a great spot to unwind.
      </Review>

      <Review name="Michelle" date="November 2017" avatar={avatar2}>
        What an absolutely wonderful place to stay! Yudy and Victoria were so kind and lovely, even
        after we arrived super late due to problems at the airport, and Hernando our driver was
        super friendly and really patient with our little Spanish. Victoria was a lovely host and
        gave us some great tips while Yudy&apos;s cooking was super yummy. The cabana is absolutely
        beautiful and we can&apos;t wait to come back!!
      </Review>

      <Pagination showRange={false} />
    </Wrap>
  );
}
