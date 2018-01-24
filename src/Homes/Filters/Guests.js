import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';
import GuestsSelector, { guestsLabelFormatter } from '../GuestsSelector';
import Dropdown from '../../UI/Dropdown';

export const Body = styled.div`
  padding: 40px 8px 8px;

  @media (min-width: ${bp.sm}px) {
    padding: 30px 16px 0 24px;
  }
`;

export default function Guests({
  isOpen,
  maxGuests,
  maxInfants,
  values,
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {},
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={guestsLabelFormatter(values.adults, values.children, values.infants, false)}
      heading="Guests"
      hasMobileHeaderSeparator
      hasMobileFooter
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <Body>
        <GuestsSelector
          maxGuests={maxGuests}
          maxInfants={maxInfants}
          values={values}
          onValuesChange={onFilterChange}
        />
      </Body>
    </Dropdown>
  );
}
