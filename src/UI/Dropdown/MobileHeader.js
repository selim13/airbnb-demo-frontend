import React from 'react';

import styled from 'styled-components';

import closeSvg from './close.svg';

const MobileHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: ${props =>
    (props.separator ? '1px solid rgba(72, 72, 72, 0.3)' : '1px solid transparent')};
  font-size: 14px;
`;

const CloseButton = styled.button`
  padding: 8px;
  border: none;
  background: none;
  user-select: none;
  cursor: pointer;
`;

const ResetButton = styled.button`
  padding: 8px;
  border: none;
  font-size: 14px;
  color: #0f7276;
  background: none;
  user-select: none;
  cursor: pointer;
`;

export default function ({
  heading = '',
  hasSeparator = true,
  resetButtonTitle = 'Reset',
  onClose = () => {},
  onReset = () => {},
}) {
  return (
    <MobileHeader separator={hasSeparator}>
      <CloseButton onClick={onClose}>
        <img src={closeSvg} alt="" width="16" height="16" />
      </CloseButton>
      {heading}
      <ResetButton onClick={onReset}>{resetButtonTitle}</ResetButton>
    </MobileHeader>
  );
}
