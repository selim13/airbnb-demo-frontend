import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';
import Toggler from '../../UI/Toggler';
import Dropdown from '../../UI/Dropdown';

import { Caption } from './styled';

export const Body = styled.div`
  padding: 24px 16px 16px;
`;

export const ControlsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  @media (min-width: ${bp.sm}px) {
    margin-bottom: 27px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
`;

export default function ({
  isOpen = false,
  instantBook,
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {},
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText="Instant book"
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <Body>
        <ControlsGroup>
          <div>
            <Label>Instant Book</Label>
            <Caption>Listings you can book without waiting for host approval.</Caption>
          </div>
          <Toggler checked={instantBook} onChange={e => onFilterChange(e.target.checked)} />
        </ControlsGroup>
      </Body>
    </Dropdown>
  );
}
