import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import Container from "../../UI/Container";
import Button from "../../UI/Button";
import Dropdown from "../../UI/Dropdown";
import GuestsFilter from "./Guests";

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
              <Dropdown buttonText="Dates">Dates</Dropdown>
            </FilterButton>
            <FilterButton>
              <GuestsFilter />
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
