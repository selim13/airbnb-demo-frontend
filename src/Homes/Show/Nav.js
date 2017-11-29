import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

import bp from "../../breakpoints";
import ScrollNav from "../../UI/ScrollNav";
import DotSeparator from "../../UI/DotSeparator";

const Wrap = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0;
  height: 50px;
  font-size: 12px;
  color: #008489;
  background: #ffffff;

  @media (min-width: ${bp.sm}px) {
    font-size: 14px;
  }
`;

const Link = styled(ScrollLink)`
  display: inline-block;
  border-bottom: 1px solid transparent;
  color: ${props => (props.selected ? "#383838" : "#008489")};
  text-decoration: none;
  font-weight: ${props => (props.selected ? "bold" : "400")};
  cursor: pointer;

  &:hover {
    border-color: ${props => (props.selected ? "#383838" : "#008489")};
  }
`;

export default function Nav() {
  return (
    <Wrap>
      <ScrollNav
        defaultSelected="overview"
        smooth={true}
        duration={200}
        offset={-130}
      >
        <Link to="overview" spy={true}>
          Overview
        </Link>
        <DotSeparator />
        <Link to="reviews" spy={true}>
          Reviews
        </Link>
        <DotSeparator />
        <Link to="host" spy={true}>
          The host
        </Link>
        <DotSeparator />
        <Link to="location" spy={true}>
          Location
        </Link>
      </ScrollNav>
    </Wrap>
  );
}
