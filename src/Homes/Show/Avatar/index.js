import React from "react";
import styled from "styled-components";

import bp from "../../../breakpoints";

import avatarImg from "./avatar.png";
import superhostSvg from "./superhost.svg";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`;

const AvatarWrap = styled.div`
  position: relative;
`;

const Superhost = styled.img`
  position: absolute;
  right: -2px;
  bottom: -1px;
  width: 10px;
  height: auto;

  @media (min-width: ${bp.sm}px) {
    width: 16px;
  }
`;

const HostAvatar = styled.img`
  display: block;
  width: 40px;
  height: 40px;

  @media (min-width: ${bp.sm}px) {
    width: 64px;
    height: 64px;
  }
`;

const Name = styled.p`
  display: none;
  margin-top: 12px;
  margin-bottom: 0;
  color: #636363;
  font-size: 18px;
  font-weight: 300;
  text-align: center;

  @media (min-width: ${bp.sm}px) {
    display: block;
  }
`;

export default function() {
  return (
    <Wrap>
      <AvatarWrap>
        <HostAvatar src={avatarImg} alt="" width="64" height="64" />
        <Superhost src={superhostSvg} />
      </AvatarWrap>
      <Name>Yudi &amp; Victoria</Name>
    </Wrap>
  );
}
