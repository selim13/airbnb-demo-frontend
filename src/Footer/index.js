import React from 'react';
import styled from 'styled-components';

import bp from '../breakpoints';
import Container from '../UI/Container';
import Menu from './Menu';
import BottomBar from './BottomBar';

const Footer = styled.footer`
  border-top: 1px solid #e3e3e3;
  font-size: 12px;
  color: #636363;

  @media (min-width: ${bp.lg}px) {
    font-size: 15px;
  }
`;

export default function () {
  return (
    <Footer>
      <Container>
        <Menu />
        <BottomBar />
      </Container>
    </Footer>
  );
}
