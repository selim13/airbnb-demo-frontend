import React from "react";
import styled from "styled-components";

import searchIcon from "./search.svg";

const IconWrap = styled.div`
  flex: 0 1 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
`;
const InputWrap = styled.div`flex: 1;`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: none;

  font-size: 16px;
  line-height: 24px;
  font-family: inherit;

  background-color: transparent;
  background-image: none;

  outline: none;
`;

const Search = ({ className, id, name, placeholder, value }) => {
  return (
    <div className={className}>
      <IconWrap>
        <img src={searchIcon} alt="" width="21" height="22" />
      </IconWrap>
      <InputWrap>
        <Input id={id} name={name} placeholder={placeholder} value={value} />
      </InputWrap>
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
