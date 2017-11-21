import React from "react";

import NumericInput from "../../UI/NumericInput";

import { ControlsGroup, Label } from "./styled";

export default function({
  isOpen = false,
  bedrooms = 0,
  beds = 0,
  bathrooms = 0,
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
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
          onValueChange={bedrooms => onFilterChange({ bedrooms: bedrooms })}
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
          onValueChange={beds => onFilterChange({ beds: beds })}
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
          onValueChange={bathrooms => onFilterChange({ bathrooms: bathrooms })}
        />
      </ControlsGroup>
    </div>
  );
}
