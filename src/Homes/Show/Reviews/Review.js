import React from 'react';
import styled from 'styled-components';

import ReadMoreText from '../../../UI/ReadMoreText';
import flagSvg from '../flag.svg';

const Wrap = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  display: block;
  margin-right: 16px;
  width: 48px;
  height: auto;
`;

const Name = styled.p`
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 20px;
`;

const Date = styled.time`
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 300;
`;

const Description = styled.blockquote`
  margin: 16px 0 24px;
  color: #383838;
  font-size: 18px;
  font-weight: 300;
`;

const FlagButton = styled.button`
  align-self: flex-start;
  margin-left: auto;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
`;

export default function ({
  avatar, name, date, children,
}) {
  return (
    <Wrap>
      <Heading>
        <Avatar src={avatar} alt="" width="48" height="48" />
        <div>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </div>
        <FlagButton>
          <img src={flagSvg} alt="" width="16" height="16" aria-hidden="true" />
        </FlagButton>
      </Heading>
      <Description>
        <ReadMoreText lines={4}>{children}</ReadMoreText>
      </Description>
    </Wrap>
  );
}
