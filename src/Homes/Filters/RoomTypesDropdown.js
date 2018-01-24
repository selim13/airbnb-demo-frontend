import React from 'react';
import styled from 'styled-components';

import Dropdown from '../../UI/Dropdown';
import RoomTypes from './RoomTypes';

export const Body = styled.div`
  padding: 24px 16px 0 16px;
`;

function roomTypesLabelFormatter(roomTypes) {
  const optionsCount = Object.keys(roomTypes).reduce(
    (previousValue, key) => (roomTypes[key] ? previousValue + 1 : previousValue),
    0,
  );
  if (optionsCount > 1) return `Room type · ${optionsCount}`;

  if (roomTypes.entire) return 'Entire house';
  if (roomTypes.private) return 'Private room';
  if (roomTypes.shared) return 'Shared room';

  return 'Room type';
}

export default function ({
  isOpen = false,
  roomTypes = { entire: false, private: false, shared: false },
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {},
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={roomTypesLabelFormatter(roomTypes)}
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
