import React from "react";
import styled from "styled-components";

import { bp } from "../vars";

import rightArrowSvg from "./rightArrow.svg";

const SliderContainer = styled.div`
  position: relative;
  max-width: ${bp.lg}px;
  margin: 0 auto;
  overflow-x: auto;
`;
const Slider = styled.div`
  display: flex;
  //width: fit-content;
  justify-content: space-between;
`;
const NavBtn = styled.button`
  display: none;
  @media (min-width: ${bp.lg}px) {
    display: block;
  }

  position: absolute;
  top: ${props =>
    props.imagesHeight ? props.imagesHeight / 2 - 20 + "px" : "50%"};
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  background: #ffffff url(${rightArrowSvg}) left 16px center no-repeat;
  cursor: pointer;
`;
const NextBtn = NavBtn.extend`
  right: 0;
  background: #ffffff url(${rightArrowSvg}) left 16px center no-repeat;
`;

export default function({ children, hasDesktopNav, imagesHeight }) {
  return (
    <SliderContainer>
      <Slider>{children}</Slider>
      {hasDesktopNav && <NextBtn imagesHeight={imagesHeight} />}
    </SliderContainer>
  );
}
