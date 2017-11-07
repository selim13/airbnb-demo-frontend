import React from "react";
import styled from "styled-components";

import { bp } from "../vars";

const Menu = styled.ul`
  display: none;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${bp.desktop}px) {
    display: flex;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 0.5rem;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #383838;
`;

export default function() {
  return (
    <nav>
      <Menu>
        <li>
          <MenuLink href="#">Become a host</MenuLink>
        </li>
        <li>
          <MenuLink href="#">Help</MenuLink>
        </li>
        <li>
          <MenuLink href="#">Sign up</MenuLink>
        </li>
        <li>
          <MenuLink href="#">Log in</MenuLink>
        </li>
      </Menu>
    </nav>
  );
}
