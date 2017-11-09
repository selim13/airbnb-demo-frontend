import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Hidden from "../Hidden";
import downArrowSvg from "./downArrow.svg";

const Label = Hidden.withComponent("label");

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.75rem 50px 0.75rem 1rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 300;
  color: #495057;
  background: #ffffff url(${downArrowSvg}) right 20px center no-repeat;
  appearance: none;

  @media (min-width: ${bp.sm}px) {
    font-size: 15px;
  }

  @media (min-width: ${bp.lg}px) {
    font-size: 18px;
  }
`;

export default function({ className, id, name, label, children }) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Select name={name} id={id}>
        {children}
      </Select>
    </div>
  );
}
