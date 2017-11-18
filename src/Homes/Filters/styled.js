import styled from "styled-components";

import bp from "../../breakpoints";

export const FixedPlaceholder = styled.div`
  height: 56px;
  margin-bottom: 24px;
`;

export const Bar = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  background-color: #ffffff;
`;

export const BarRow = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
`;

export const ControlsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  @media (min-width: ${bp.sm}px) {
    margin-bottom: 27px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;

  @media (min-width: ${bp.sm}px) {
    font-size: 20px;
  }
`;

export const Caption = styled.small`
  display: block;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-top: 8px;
    font-size: 16px;
  }
`;
