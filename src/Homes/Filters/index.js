import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import Container from "../../UI/Container";
import Button from "../../UI/Button";
import Guests from "./Guests";
import Dates from "./Dates";

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
  border-bottom: 1px solid #e3e3e3;
  background-color: #ffffff;
`;
const FilterButton = styled.div`
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`;
const DesktopFilterButton = FilterButton.extend`
  display: none;
  @media (min-width: ${bp.md}px) {
    display: inline-block;
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
            <FilterButton>
              <Dates />
            </FilterButton>
            <FilterButton>
              <Guests />
            </FilterButton>
            <DesktopFilterButton>
              <Button>Room type</Button>
            </DesktopFilterButton>
            <DesktopFilterButton>
              <Button>Price</Button>
            </DesktopFilterButton>
            <DesktopFilterButton>
              <Button>Instant book</Button>
            </DesktopFilterButton>
            <FilterButton>
              <Button>More filters</Button>
            </FilterButton>
          </BarRow>
        </Container>
      </Bar>
    </FixedPlaceholder>
  );
}
