import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Button from "../UI/Button";

const FixedPlaceholder = styled.div`
  height: 56px;
  margin-bottom: 24px;
`;
const Bar = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-color: #ffffff;
`;
const FilterButton = Button.extend`
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`;
const BarRow = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
`;

export default function() {
  return (
    <FixedPlaceholder>
      <Bar>
        <Container>
          <BarRow>
            <FilterButton>Dates</FilterButton>
            <FilterButton>Guests</FilterButton>
            <FilterButton>Room type</FilterButton>
            <FilterButton>Price</FilterButton>
            <FilterButton>Instant book</FilterButton>
            <FilterButton>More filters</FilterButton>
          </BarRow>
        </Container>
      </Bar>
    </FixedPlaceholder>
  );
}
