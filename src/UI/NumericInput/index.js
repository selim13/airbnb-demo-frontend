import React from 'react';
import styled from 'styled-components';

import plusSvg from './plus.svg';
import minusSvg from './minus.svg';

const NumericInput = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border: 1px solid #008489;
  border-radius: 100%;
  font-size: 16px;
  background: #ffffff;
  user-select: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 2px 2px #008489;
    outline: none;
  }

  &[disabled] {
    opacity: 0.5;
  }
`;
const Value = styled.p`
  display: block;
  width: 2em;
  margin: 0 8px;
  padding: 0.5rem 0;
  border: none;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  color: #383838;
`;

export default function ({
  min = 0, max = 5, value = 0, suffix = '', onValueChange,
}) {
  const modifyValue = (delta) => {
    const newValue = value + delta;
    if (newValue >= min && newValue <= max) {
      onValueChange(newValue);
    }
  };

  return (
    <NumericInput>
      <Button disabled={value <= min} onClick={() => modifyValue(-1)}>
        <img src={minusSvg} alt="" width="10" height="2" />
      </Button>
      <Value>{value + suffix}</Value>
      <Button disabled={value >= max} onClick={() => modifyValue(1)}>
        <img src={plusSvg} alt="" width="10" height="10" />
      </Button>
    </NumericInput>
  );
}
