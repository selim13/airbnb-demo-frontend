import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import { ToMd } from "../../UI/MediaQueries";
import NumericInput from "../../UI/NumericInput";
import Dropdown from "../../UI/Dropdown";
import RoomTypes from "./RoomTypes";

import { ControlsGroup, Label, Caption } from "./styled";

export const Body = styled.div`
  padding: 40px 8px 8px;

  @media (min-width: ${bp.sm}px) {
    padding: 30px 16px 0 24px;
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
      <Body>
        <ToMd>
          <RoomTypes roomTypes={roomTypes} onFilterChange={onFilterChange} />
        </ToMd>
      </Body>
    </Dropdown>
  );
}
