import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';

import bulbImg from './bulb.png';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.mobile ? '0' : '24px')};
  padding: ${props => (props.mobile ? '0' : '13px 32px 13px 24px')};
  border: ${props => (props.mobile ? 'none' : '1px solid rgba(118, 118, 118, 0.2)')};

  @media (min-width: ${bp.lg}px) {
    margin-bottom: ${props => (props.mobile ? '0' : '32px')};
  }
`;

const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 14px;
  color: #383838;
`;

const Caption = styled.small`
  font-size: 14px;
  font-weight: 300;
  color: #636363;
`;

const BulbImg = styled.img`
  margin-left: 8px;
`;

export default function ({ mobile }) {
  return (
    <Wrap mobile={mobile}>
      <div>
        <Heading>This home is on people’s minds.</Heading>
        <Caption>It’s been viewed 500+ times in the past week.</Caption>
      </div>
      <BulbImg src={bulbImg} alt="" width="48" height="48" />
    </Wrap>
  );
}
