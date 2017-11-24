import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import arrowSvg from "./arrow.svg";

const Button = styled.button`
  padding: 0.5rem 0;
  border: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  color: #0f7276;
  background: none;
  user-select: none;
  cursor: pointer;

  @media (min-width: ${bp.sm}px) {
    font-size: 16px;
  }
`;

const Arrow = styled.img`
  margin-left: 8px;
  vertical-align: middle;

  transform: ${props => (props.active ? "rotateZ(180deg)" : "none")};
`;

export default function({ isOpen = false, label = "", ...props }) {
  return (
    <Button {...props}>
      {label}
      <Arrow
        active={isOpen}
        src={arrowSvg}
        alt=""
        aria-hidden="true"
        width="12"
        height="7"
      />
    </Button>
  );
}
