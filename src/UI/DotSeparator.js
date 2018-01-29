import React from 'react';
import styled from 'styled-components';

const Separator = styled.span`
  margin: 0 6px;
`;

export default function (props) {
  return <Separator {...props}>&middot;</Separator>;
}
