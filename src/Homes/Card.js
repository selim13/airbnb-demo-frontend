import React from 'react';
import styled from 'styled-components';
import repeat from 'lodash/repeat';
import { createSkeletonProvider, createSkeletonElement } from '@trainline/react-skeletor';
import { Link } from 'react-router-dom';

import bp from '../breakpoints';
import formatPrice from '../formatPrice';
import Reviews from '../UI/Reviews';

const Wrap = styled(Link)`
  font-size: 13px;
  color: #383838;
  text-decoration: none;

  @media (min-width: ${bp.sm}px) {
    font-size: 15px;
  }
`;

const ImageWrap = createSkeletonElement(styled.div`
  min-height: 210px; // for skeleton
  margin-bottom: 8px;
`);

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Heading = styled.p`
  margin: 0;
  overflow: hidden;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  max-height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: ${bp.sm}px) {
    font-size: 15px;
    line-height: 21px;
    max-height: 21px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-weight: 300;
`;

const InlineSkeleton = createSkeletonElement('span');

const roomTypes = { entire_home: 'Entire house', private_room: 'Private room' };

function Card({
  id,
  name,
  image,
  price,
  currency = 'USD',
  roomType,
  bedsNumber = 0,
  rating = 0,
  reviewsCount = 0,
  isSuperhost,
}) {
  return (
    <Wrap to={`/homes/${id}`}>
      <ImageWrap>{image && <Image src={image} width="738" height="494" alt="" />}</ImageWrap>
      <Heading>
        <InlineSkeleton>
          {price && `${formatPrice(price, currency)}`} {name}
        </InlineSkeleton>
      </Heading>
      <Description>
        <InlineSkeleton>
          {roomTypes[roomType]} · {bedsNumber} beds
        </InlineSkeleton>
      </Description>
      <Reviews
        rating={Math.floor(rating)}
        count={reviewsCount}
        status={isSuperhost ? 'Superhost' : false}
      />
    </Wrap>
  );
}

export default createSkeletonProvider(
  // Dummy data with a similar shape to the component's data
  {
    name: repeat('-', 42),
    roomType: 'entire_home',
    price: 0,
    currency: 'USD',
    bedsNumber: 0,
  },
  // Predicate that returns true if component is in a loading state
  ({ name }) => name === undefined,
  // Placeholder styling
  () => ({
    color: '#fafafa',
    backgroundColor: '#fafafa',
  }),
)(Card);
