import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import NumericInput from "../../UI/NumericInput";
import Dropdown from "./MoreDropdown";
import RoomTypes from "./RoomTypes";

import { ControlsGroup, Label, Caption } from "./styled";

const Section = styled.div`
  margin-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e3e3e3;

  @media (min-width: ${bp.sm}px) {
    margin-top: 23px;
    padding-bottom: 23px;
  }
`;

// TODO: make this an actual heading?
const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 18px;

  @media (min-width: ${bp.sm}px) {
    font-size: 20px;
  }
`;

export default function({
  isOpen = false,
  roomTypes = { entire: false, private: false, shared: false },
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  return (
    <Dropdown
      isOpen={true}
      buttonText="More filters"
      heading="All filters (0)"
      hasMobileHeaderSeparator
      hasMobileFooter
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <div>
        <Section>
          <Heading>Room type</Heading>
          <RoomTypes roomTypes={roomTypes} onFilterChange={onFilterChange} />
        </Section>
      </div>
    </Dropdown>
  );
}
