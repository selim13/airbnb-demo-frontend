import React from "react";
import styled from "styled-components";
import pluralize from "pluralize";

import bp from "../../breakpoints";
import NumericInput from "../../UI/NumericInput";
import Dropdown from "../../UI/Dropdown";

import { Caption } from "./styled";

export const Body = styled.div`
  padding: 40px 8px 8px;

  @media (min-width: ${bp.sm}px) {
    padding: 30px 16px 0 24px;
  }
`;

export const ControlsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  @media (min-width: ${bp.sm}px) {
    margin-bottom: 27px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 18px;

  @media (min-width: ${bp.sm}px) {
    font-size: 20px;
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

export default function({
  isOpen = false,
  maxGuests = 10,
  maxInfants = 5,
  adults = 1,
  children = 0,
  infants = 0,
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={guestsLabelFormatter(adults, children, infants)}
      heading="Guests"
      hasMobileHeaderSeparator
      hasMobileFooter
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <Body>
        <ControlsGroup>
          <div>
            <Label>Adults</Label>
          </div>
          <NumericInput
            min={1}
            max={maxGuests - children}
            value={adults}
            onValueChange={adults => onFilterChange({ adults: adults })}
          />
        </ControlsGroup>
        <ControlsGroup>
          <div>
            <Label>Children</Label>
            <Caption>Ages 2 &ndash; 12</Caption>
          </div>
          <NumericInput
            min={0}
            max={maxGuests - adults}
            value={children}
            onValueChange={value => onFilterChange({ children: value })}
          />
        </ControlsGroup>
        <ControlsGroup>
          <div>
            <Label>Infants</Label>
            <Caption>Under 2</Caption>
          </div>
          <NumericInput
            min={0}
            max={maxInfants}
            value={infants}
            onValueChange={value => onFilterChange({ infants: value })}
          />
        </ControlsGroup>
      </Body>
    </Dropdown>
  );
}
