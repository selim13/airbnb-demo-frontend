import React from 'react';

import NumericInput from '../../UI/NumericInput';
import { ControlsGroup, Label } from './styled';

export default function ({
  bedrooms = 0, beds = 0, bathrooms = 0, onFilterChange = () => {},
}) {
  return (
    <div>
      <ControlsGroup>
        <div>
          <Label>Bedrooms</Label>
        </div>
        <NumericInput
          min={0}
          max={100}
          value={bedrooms}
          suffix="+"
          onValueChange={value => onFilterChange({ bedrooms: value, beds, bathrooms })}
        />
      </ControlsGroup>
      <ControlsGroup>
        <div>
          <Label>Beds</Label>
        </div>
        <NumericInput
          min={0}
          max={100}
          value={beds}
          suffix="+"
          onValueChange={value => onFilterChange({ beds: value, bedrooms, bathrooms })}
        />
      </ControlsGroup>
      <ControlsGroup>
        <div>
          <Label>Bathrooms</Label>
        </div>
        <NumericInput
          min={0}
          max={100}
          value={bathrooms}
          suffix="+"
          onValueChange={value => onFilterChange({ bathrooms: value, beds, bedrooms })}
        />
      </ControlsGroup>
    </div>
  );
}
