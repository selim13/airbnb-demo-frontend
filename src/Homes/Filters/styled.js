import styled from "styled-components";

import bp from "../../breakpoints";

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
