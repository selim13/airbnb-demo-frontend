import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  padding: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  background: #ffffff;
`;

export default function Dropdown({ isOpen = false, children }) {
  return isOpen ? <Wrap>{children}</Wrap> : null;
}
