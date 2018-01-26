import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import pluralize from 'pluralize';

import bp from '../../../breakpoints';
import { ToSm, Sm } from '../../../UI/mediaQueries';

import guestsSvg from './guests.svg';
import bedSvg from './bed.svg';
import studioSvg from './studio.svg';
import bathtubSvg from './bathtub.svg';

const Wrap = styled.div`
  margin-top: 32px;

  @media (min-width: ${bp.sm}px) {
    margin-top: 48px;
  }
`;

const List = styled.div`
  display: flex;
`;

const Property = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-right: 30px;
    margin-bottom: 0;
  }
`;
const Icon = styled.img`
  margin-right: 8px;
`;

export default function ({
  guests, type, beds, baths,
}) {
  return (
    <Wrap>
      <ToSm>
        <Row>
          <Col xs={6}>
            <Property>
              <Icon src={guestsSvg} /> {guests} {pluralize('guest', guests)}
            </Property>
            <Property>
              <Icon src={studioSvg} /> {type}
            </Property>
          </Col>
          <Col xs={6}>
            <Property>
              <Icon src={bedSvg} /> {beds} {pluralize('bed', beds)}
            </Property>
            <Property>
              <Icon src={bathtubSvg} /> {baths} {pluralize('bath', baths)}
            </Property>
          </Col>
        </Row>
      </ToSm>
      <Sm>
        <List>
          <Property>
            <Icon src={guestsSvg} /> {guests} {pluralize('guest', guests)}
          </Property>
          <Property>
            <Icon src={studioSvg} /> {type}
          </Property>
          <Property>
            <Icon src={bedSvg} /> {beds} {pluralize('bed', beds)}
          </Property>
          <Property>
            <Icon src={bathtubSvg} /> {baths} {pluralize('bath', baths)}
          </Property>
        </List>
      </Sm>
    </Wrap>
  );
}
