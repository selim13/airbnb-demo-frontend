import React from 'react';
import styled from 'styled-components';

import { SliderContainer, SliderRow, NextBtn } from './styled';

export const Slide = styled.div`
  flex: 0 0 auto;
  margin: 0 8px;
`;

export const Slider = function Slider({ children, hasDesktopNavigation }) {
  return (
    <SliderContainer>
      {/* TODO: PrevBtn */}
      <SliderRow>{children}</SliderRow>
      {hasDesktopNavigation && <NextBtn />}
    </SliderContainer>
  );
};
