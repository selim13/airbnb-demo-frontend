import React from "react";
import styled from "styled-components";

import bp from "../breakpoints";

import Container from "../Container";
import Menu from "./Menu";
import Search from "./Search";

import logo from "./logo.svg";
import downArrowSvg from "./downArrow.svg";

const Bar = styled.header`
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;
const BarInner = styled.div`min-height: 80px;`;

const LogoButton = styled.button`
  display: flex;
  align-items: center;
  padding-right: 16px;
  margin: 0;
  border: 0;
  background: transparent url(${downArrowSvg}) right center no-repeat;
  cursor: pointer;

  @media (min-width: ${bp.lg}px) {
    padding: none;
    background: transparent;
  }
`;

export default function() {
  return (
    <Bar>
      <Container>
        <BarInner className="row middle-xs">
          <div className="col-xs-2 col-md-1">
            <LogoButton>
              <img src={logo} alt="AirBnB" width="30" height="32" />
            </LogoButton>
          </div>

          <div className="col-xs-10 col-md-7 col-lg-5">
            <Search
              name="site-search"
              id="site-search"
              placeholder="Try Miami"
            />
          </div>

          <div className="col-lg-6">
            <Menu />
          </div>
        </BarInner>
      </Container>
    </Bar>
  );
}
