import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';
import Checkbox from '../../UI/Checkbox';
import { ControlsGroup } from './styled';

import entireSvg from './entire.svg';
import privateSvg from './private.svg';
import sharedSvg from './shared.svg';

const TypeImg = styled.img`
  display: none;
  flex-shrink: 0;
  margin-left: 1rem;

  @media (min-width: ${bp.sm}px) {
    display: block;
  }
`;

export default function ({
  roomTypes = { entire: false, private: false, shared: false },
  onFilterChange = () => {},
}) {
  return (
    <div>
      <ControlsGroup>
        <Checkbox
          checked={roomTypes.entire}
          onChange={e =>
            onFilterChange({
              entire: e.target.checked,
              private: roomTypes.private,
              shared: roomTypes.shared,
            })
          }
          label="Entire home"
          caption="Have a place to yourself"
        />
        <TypeImg src={entireSvg} alt="" width="32" height="32" />
      </ControlsGroup>
      <ControlsGroup>
        <Checkbox
          checked={roomTypes.private}
          onChange={e =>
            onFilterChange({
              entire: roomTypes.entire,
              private: e.target.checked,
              shared: roomTypes.shared,
            })
          }
          label="Private room"
          caption="Have your own room and share some common spaces"
        />
        <TypeImg src={privateSvg} alt="" width="32" height="32" />
      </ControlsGroup>
      <ControlsGroup>
        <Checkbox
          checked={roomTypes.shared}
          onChange={e =>
            onFilterChange({
              entire: roomTypes.entire,
              private: roomTypes.private,
              shared: e.target.checked,
            })
          }
          label="Shared room"
          caption="Stay in a shared space, like a common room"
        />
        <TypeImg src={sharedSvg} alt="" width="32" height="32" />
      </ControlsGroup>
    </div>
  );
}
