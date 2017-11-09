import React from "react";
import styled from "styled-components";

import { bp } from "../vars";

const Nav = styled.nav`
  display: none;
  justify-content: flex-end;

  @media (min-width: ${bp.lg}px) {
    display: flex;
  }
`;
const Link = styled.a`
  margin-left: 8px;
  padding: 1rem 0.5rem;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #383838;
`;

export default function() {
  return (
    <Nav>
      <Link href="#">Become a host</Link>
      <Link href="#">Help</Link>
      <Link href="#">Sign up</Link>
      <Link href="#">Log in</Link>
    </Nav>
  );
}
