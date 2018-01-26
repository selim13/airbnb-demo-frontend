import React from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';

import bp from '../breakpoints';
import NumericInput from '../UI/NumericInput';

const ControlsGroup = styled.div`
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

const Caption = styled.small`
  display: block;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-top: 8px;
    font-size: 16px;
  }
`;

export function guestsLabelFormatter(adults, children, infants, displayOneGuest = true) {
  const guests = adults + children;

  if (displayOneGuest || guests + infants > 1) {
    if (infants > 0) {
      return (
        `${guests} ${pluralize('guest', guests)}, ${infants} ${pluralize('infant', infants)}`
      );
    }
    return `${guests} ${pluralize('guest', guests)}`;
  }

  return 'Guests';
}

export default function GuestsSelector({
  maxGuests = 1,
  maxInfants = 0,
  values = { adults: 1, children: 0, infants: 0 },
  onValuesChange = () => {},
}) {
  return (
    <div>
      <ControlsGroup>
        <div>
          <Label>Adults</Label>
        </div>
        <NumericInput
          min={1}
          max={maxGuests - values.children}
          value={values.adults}
          onValueChange={newValue =>
            onValuesChange({
              adults: newValue,
              children: values.children,
              infants: values.infants,
            })
          }
        />
      </ControlsGroup>
      <ControlsGroup>
        <div>
          <Label>Children</Label>
          <Caption>Ages 2 &ndash; 12</Caption>
        </div>
        <NumericInput
          min={0}
          max={maxGuests - values.adults}
          value={values.children}
          onValueChange={newValue =>
            onValuesChange({
              children: newValue,
              adults: values.adults,
              infants: values.infants,
            })
          }
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
          value={values.infants}
          onValueChange={newValue =>
            onValuesChange({
              infants: newValue,
              adults: values.adults,
              children: values.children,
            })
          }
        />
      </ControlsGroup>
    </div>
  );
}
