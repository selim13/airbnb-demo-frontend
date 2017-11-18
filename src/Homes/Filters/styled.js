import styled from "styled-components";

import bp from "../../breakpoints";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;

  display: flex;
  flex-direction: column;

  background: #ffffff;

  @media (min-width: ${bp.sm}px) {
    position: absolute;
    min-width: 326px;
    top: 100%;
    bottom: auto;
    left: auto;
    right: auto;
    margin-top: 8px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  }
`;
export const MobileHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  font-size: 14px;
`;
export const CloseButton = styled.button`
  padding: 8px;
  border: none;
  background: none;
  user-select: none;
  cursor: pointer;
`;
export const ResetButton = styled.button`
  padding: 8px;
  border: none;
  font-size: 14px;
  color: #0f7276;
  background: none;
  user-select: none;
  cursor: pointer;
`;
export const MobileFooter = styled.div`
  margin-top: auto;
  padding: 8px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;
export const MobilePrimaryButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;

  border: none;
  border-radius: 4px;

  color: #ffffff;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  background: #ff5a5f;

  cursor: pointer;
  user-select: none;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CancelButton = styled.button`
  padding: 1.25rem 2rem;
  border: none;
  font-size: 16px;
  color: #636363;
  background: none;
  user-select: none;
  cursor: pointer;
`;
export const ApplyButton = styled.button`
  padding: 1.25rem 2rem;
  border: none;
  font-size: 16px;
  color: #008489;
  background: none;
  user-select: none;
  cursor: pointer;
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
