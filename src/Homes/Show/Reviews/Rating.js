import React from 'react';
import styled from 'styled-components';

import bp from '../../../breakpoints';
import Icon from '../../../UI/Icon';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 2px;

  &:last-child: {
    margin-right: 0;
  }

  @media (min-width: ${bp.sm}px) {
    width: ${props => (props.largeStars ? '20px' : '16px')};
    height: ${props => (props.largeStars ? '20px' : '16px')};
  }
`;

const FilledStar = Star.extend`
  fill: #008489;
`;

const EmptyStar = Star.extend`
  fill: #d8d8d8;
`;

export default function ({ rating = 5, largeStars = false }) {
  const starsList = [1, 2, 3, 4, 5].map((i) => {
    if (i <= rating) {
      return <FilledStar key={i} icon="star" largeStars={largeStars} />;
    }
    return <EmptyStar key={i} icon="star" largeStars={largeStars} />;
  });

  return <Wrap>{starsList}</Wrap>;
}
