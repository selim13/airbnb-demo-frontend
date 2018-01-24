import React from 'react';
import styled from 'styled-components';

import bp from '../breakpoints';

const Label = styled.label`
  display: flex;
  align-items: flex-start;

  font-size: 16px;
  font-weight: 300;
  line-height: 1.3;
  cursor: pointer;

  @media (min-width: ${bp.sm}px) {
    font-size: 18px;
  }
`;

const Checkbox = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  visibility: hidden;
`;

const Caption = styled.small`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    font-size: 14px;
  }
`;

const Svg = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  background: #ffffff;
  fill: transparent;

  ${Checkbox}:checked ~ & {
    fill: #ffffff;
    background: #008489;
    border-color: #008489;
  }
`;

const CheckMarkIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
  </Svg>
);

export default function ({
  checked = false, label = '', caption = '', onChange = () => {},
}) {
  return (
    <Label>
      <div>
        <Checkbox type="checkbox" checked={checked} onChange={onChange} />
        <CheckMarkIcon />
      </div>
      <div>
        {label}
        {caption && <Caption>{caption}</Caption>}
      </div>
    </Label>
  );
}
