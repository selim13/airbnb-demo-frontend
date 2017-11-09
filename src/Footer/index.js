import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Menu from "./Menu";
import Bar from "./Bar";

const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  font-size: 15px;
  color: #636363;
`;

export default function() {
  return (
    <Footer>
      <Container>
        <Menu />
        <Bar />
      </Container>
    </Footer>
  );
}
