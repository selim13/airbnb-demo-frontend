import React from "react";
import styled from "styled-components";

import bp from "../breakpoints";

import Container from "../UI/Container";
import Menu from "./Menu";
import Search from "./Search";

import logo from "./logo.svg";
import downArrowSvg from "./downArrow.svg";

const FixedPlaceholder = styled.header`height: 80px;`;
const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-color: #ffffff;
`;
const BarRow = styled.div`height: 79px;`;
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

export default function({ searchPlaceholder = "Search", searchValue }) {
  return (
    <FixedPlaceholder>
      <Bar>
        <Container>
          <BarRow className="row middle-xs">
            <div className="col-xs-2 col-md-1">
              <LogoButton>
                <img src={logo} alt="AirBnB" width="30" height="32" />
              </LogoButton>
            </div>

            <div className="col-xs-10 col-md-7 col-lg-5">
              <Search
                name="site-search"
                id="site-search"
                placeholder={searchPlaceholder}
                value={searchValue}
              />
            </div>

            <div className="col-lg-6">
              <Menu />
            </div>
          </BarRow>
        </Container>
      </Bar>
    </FixedPlaceholder>
  );
}
