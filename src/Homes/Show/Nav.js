import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import DotSeparator from "../../UI/DotSeparator";

const Nav = styled.nav`
  padding: 15px 0;
  height: 50px;
  font-size: 12px;
  color: #008489;
  background: #ffffff;

  @media (min-width: ${bp.sm}px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  display: inline-block;
  border-bottom: 1px solid transparent;
  color: ${props => (props.selected ? "#383838" : "#008489")};
  text-decoration: none;
  font-weight: ${props => (props.selected ? "bold" : "400")};

  &:hover {
    border-color: ${props => (props.selected ? "#383838" : "#008489")};
  }
`;

export default function() {
  return (
    <Nav>
      <Link href="overview" selected>
        Overview
      </Link>
      <DotSeparator />
      <Link href="#reviews">Reviews</Link>
      <DotSeparator />
      <Link href="#host">The host</Link>
      <DotSeparator />
      <Link href="#location">Location</Link>
    </Nav>
  );
}
