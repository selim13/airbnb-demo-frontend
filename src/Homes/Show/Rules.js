import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Paragraph, ShortHr } from './styled';
import ReadMore from '../../UI/ReadMore';

const Acknowledge = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1em;
  font-weight: 400;
`;

export default function Rules() {
  return (
    <Fragment>
      <Paragraph>
        Check-in is anytime after 1PM<br />
        Check out by 11AM
      </Paragraph>

      <ReadMore openLabel="Read all rules">
        <ShortHr />
        <Acknowledge>You must also acknowledge</Acknowledge>
        <Paragraph>Dog(s) and cat(s) live in the house</Paragraph>
      </ReadMore>
    </Fragment>
  );
}
