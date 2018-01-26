import React from 'react';
import styled from 'styled-components';
import bp from '../../../breakpoints';

import VisuallyHidden from '../../../UI/VisuallyHidden';
import searchIcon from './search.svg';

const Label = VisuallyHidden.withComponent('label');

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 34px;
  border: 1px solid #d5d5d5;
  border-radius: 2px;

  font-size: 14px;
  line-height: 24px;
  font-family: inherit;
  color: #383838;

  background: #ffffff url(${searchIcon}) left 10px center no-repeat;

  &::placeholder {
    color: #383838;
    opacity: 1;
  }

  @media (min-width: ${bp.sm}px) {
    max-width: 230px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
`;

export default function ({
  className, id, name, placeholder = '', value = '', label = '',
}) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} placeholder={placeholder} defaultValue={value} />
    </div>
  );
}
