import React from 'react';
import styled from 'styled-components';

import Dropdown from '../../UI/Dropdown';
import Price from './Price';

export const Body = styled.div`
  padding: 24px 16px 0 16px;
`;

function priceLabelFormatter(maxPrice, maxValue) {
  if (maxValue < maxPrice) return `Up to $${maxValue}`;

  return 'Price';
}

export default function ({
  isOpen = false,
  range,
  values,
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {},
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={priceLabelFormatter(range.max, values.max)}
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <Body>
        <Price range={range} values={values} onFilterChange={onFilterChange} />
      </Body>
    </Dropdown>
  );
}
