import React from "react";
import styled from "styled-components";

import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";

import bp from "../../breakpoints";

const PriceRange = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    font-size: 18px;
  }

  @media (min-width: ${bp.lg}px) {
    font-size: 16px;
  }
`;
const Average = styled.small`
  display: block;
  margin-bottom: 32px;
  font-size: 12px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 27px;
    font-size: 14px;
  }

  @media (min-width: ${bp.lg}px) {
    margin-bottom: 32px;
    font-size: 12px;
  }
`;

export default function({
  isOpen = false,
  range = { min: 0, max: 1000 },
  values = { min: 0, max: 1000 },
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  return (
    <div>
      <PriceRange>
        ${values.min} &ndash; ${values.max}+
      </PriceRange>
      <Average>The average nightly price is $75.</Average>
      <Rheostat
        min={range.min}
        max={range.max}
        values={[values.min, values.max]}
        onValuesUpdated={values =>
          onFilterChange({ min: values.values[0], max: values.values[1] })}
      />
    </div>
  );
}
