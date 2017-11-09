import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Container from "../Container";
import Menu from "./Menu";
import BottomBar from "./BottomBar";

const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  font-size: 12px;
  color: #636363;

  @media (min-width: ${bp.lg}px) {
    font-size: 15px;
  }
`;

export default function() {
  return (
    <Footer>
      <Container>
        <Menu />
        <BottomBar />
      </Container>
    </Footer>
  );
}
