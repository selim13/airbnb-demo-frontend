import React from "react";
import styled from "styled-components";

import Dropdown from "../../UI/Dropdown";
import RoomTypes from "./RoomTypes";

export const Body = styled.div`padding: 24px 16px 0 16px;`;

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
      isOpen={isOpen}
      buttonText="Room type"
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <Body>
        <RoomTypes roomTypes={roomTypes} onFilterChange={onFilterChange} />
      </Body>
    </Dropdown>
  );
}
