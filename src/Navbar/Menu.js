import React from 'react';
import styled from 'styled-components';

import bp from '../breakpoints';
import Link from '../UI/Link';

const Nav = styled.nav`
  display: none;
  justify-content: flex-end;

  @media (min-width: ${bp.lg}px) {
    display: flex;
  }
`;
const MenuLink = Link.extend`
  margin-left: 8px;
  padding: 1rem 0.5rem;
  font-size: 14px;
  color: #383838;
`;

export default function () {
  return (
    <Nav>
      <MenuLink href="#">Become a host</MenuLink>
      <MenuLink href="#">Help</MenuLink>
      <MenuLink href="#">Sign up</MenuLink>
      <MenuLink href="#">Log in</MenuLink>
    </Nav>
  );
}
