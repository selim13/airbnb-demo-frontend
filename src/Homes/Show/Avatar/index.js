import React from 'react';
import styled from 'styled-components';

import bp from '../../../breakpoints';

import superhostSvg from './superhost.svg';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
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
  max-width: 100%;
  height: auto;
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

export default function ({ image, name, superhost }) {
  return (
    <Wrap>
      <AvatarWrap>
        <HostAvatar src={image} alt="" width="88" height="88" />
        {superhost && <Superhost src={superhostSvg} />}
      </AvatarWrap>
      {name && <Name>{name}</Name>}
    </Wrap>
  );
}
