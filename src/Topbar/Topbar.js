import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Topmenu from "./Topmenu";
import Search from "./Search";

import logo from "./logo.svg";

const Bar = styled.header`border-bottom: 1px solid rgba(72, 72, 72, 0.3);`;
const BarInner = styled.div`height: 80px;`;

const Input = styled.input`
  width: 100%;
  padding: 12px 1em;
  font-size: 16px;
  line-height: 24px;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

export default function() {
  return (
    <Bar>
      <Container>
        <BarInner className="row middle-xs">
          <div className="col-xs-2 col-sm-1">
            <div className="box">
              <a href="/">
                <img src={logo} alt="AirBnB" width="30" height="32" />
              </a>
            </div>
          </div>

          <div className="col-xs-10 col-sm-7 col-md-5">
            <div className="box">
              <Search
                name="site-search"
                id="site-search"
                placeholder="Try Miami"
              />
            </div>
          </div>

          <div className="col-md-4 col-md-offset-2">
            <Topmenu className="box" />
          </div>
        </BarInner>
      </Container>
    </Bar>
  );
}
