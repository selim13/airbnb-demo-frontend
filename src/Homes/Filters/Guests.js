import React from "react";
import styled from "styled-components";
import pluralize from "pluralize";

import bp from "../../breakpoints";
import GuestsSelector from "../GuestsSelector";
import Dropdown from "../../UI/Dropdown";

export const Body = styled.div`
  padding: 40px 8px 8px;

  @media (min-width: ${bp.sm}px) {
    padding: 30px 16px 0 24px;
  }
`;

function guestsLabelFormatter(adults, children, infants) {
  const guests = adults + children;

  if (guests + infants > 1) {
    if (infants > 0) {
      return (
        `${guests} ${pluralize("guest", guests)}, ` +
        `${infants} ${pluralize("infant", infants)}`
      );
    } else {
      return `${guests} ${pluralize("guest", guests)}`;
    }
  }

  return "Guests";
}

export default function Guests({
  isOpen,
  maxGuests,
  maxInfants,
  values,
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={guestsLabelFormatter(
        values.adults,
        values.children,
        values.infants
      )}
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
