import styled from 'styled-components';

import bp from '../../breakpoints';
import rightArrowSvg from './rightArrow.svg';

export const SliderContainer = styled.div`
  position: relative;
  max-width: ${bp.lg}px;
  margin: 0 auto;
  overflow-x: auto;

  @media (min-width: ${bp.lg}px) {
    overflow-x: hidden;
  }
`;
export const SliderRow = styled.div`
  display: flex;
  width: fit-content;
`;
const NavBtn = styled.button`
  position: absolute;
  top: calc(50% - 20px);
  z-index: 10;
  display: none;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  cursor: pointer;

  @media (min-width: ${bp.lg}px) {
    display: block;
  }
`;
export const NextBtn = NavBtn.extend`
  right: 0;
  background: #ffffff url(${rightArrowSvg}) left 16px center no-repeat;
`;
