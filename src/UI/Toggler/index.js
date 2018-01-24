import React from 'react';
import styled from 'styled-components';

import offSvg from './off.svg';
import onSvg from './on.svg';

const Label = styled.label`
  cursor: pointer;
`;

const Checkbox = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  visibility: hidden;
`;

// TODO: remake with css
const OffImg = styled.img`
  display: block;
  ${Checkbox}:checked ~ & {
    display: none;
  }
`;
const OnImg = styled.img`
  display: none;
  ${Checkbox}:checked ~ & {
    display: block;
  }
`;

export default function ({ checked = false, onChange = () => {} }) {
  // FIXME: empty label, wtf?
  return (
    <Label>
      <Checkbox type="checkbox" checked={checked} onChange={onChange} />
      <OffImg src={offSvg} alt="" />
      <OnImg src={onSvg} alt="" />
    </Label>
  );
}
