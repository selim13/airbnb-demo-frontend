import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';
import Reviews from '../../UI/Reviews';

const Wrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 8px;
  border-top: 1px solid #d5d5d5;
  background: #ffffff;

  @media (min-width: ${bp.sm}px) {
    padding: 0.75rem 8px;
  }
`;

const Price = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: #383838;
  font-size: 24px;
  font-weight: bold;
`;

const Caption = styled.small`
  color: #636363;
  font-size: 12px;
`;

const Button = styled.button`
  display: block;
  border: none;
  font-family: inherit;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
`;

const RequestButton = Button.extend`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  background: #ff5a5f;

  &:hover,
  &:focus {
    background: #f53d43;
  }

  &:active {
    background: #ed262c;
  }

  @media (min-width: ${bp.sm}px) {
    padding: 0.75rem 1rem;
    font-size: 18px;
  }
`;

export default function ({ onClick }) {
  return (
    <Wrap>
      <div>
        <Price>
          $41 <Caption>per night</Caption>
        </Price>
        <Reviews rating={5} count={111} />
      </div>

      <RequestButton onClick={onClick}>Request a book</RequestButton>
    </Wrap>
  );
}
