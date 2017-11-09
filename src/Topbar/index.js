import React from "react";
import styled from "styled-components";

import { bp } from "../vars";

import Container from "../Container";
import Menu from "./Menu";
import Search from "./Search";

import logo from "./logo.svg";
import downArrowSvg from "./downArrow.svg";

const Bar = styled.header`border-bottom: 1px solid rgba(72, 72, 72, 0.3);`;
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
const LogoButton = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: ${bp.lg}px) {
    padding-right: 16px;
    background: transparent url(${downArrowSvg}) right center no-repeat;
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
