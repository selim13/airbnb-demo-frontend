import React from "react";
import styled from "styled-components";

import Hidden from "../Hidden";
import searchIcon from "./search.svg";

const Label = Hidden.withComponent("label");

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 0.5rem 0.75rem 53px;
  border: none;

  font-size: 16px;
  line-height: 24px;
  font-family: inherit;

  background: #ffffff url(${searchIcon}) left 16px center no-repeat;\
`;

const Search = ({ className, id, name, placeholder, value }) => {
  return (
    <div className={className}>
      <Label htmlFor={id}>Search</Label>
      <Input id={id} name={name} placeholder={placeholder} value={value} />
    </div>
  );
};

export default styled(Search)`
  display: flex;
  flex-flow: row nowrap;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;
