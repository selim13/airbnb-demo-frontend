import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import bp from '../../breakpoints';
import Container from '../../UI/Container';
import rightArrowSvg from './rightArrow.svg';

const Section = styled.section`
  margin: 48px 0;
`;
const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (min-width: ${bp.md}px) {
    margin-bottom: 24px;
  }
`;
const Heading = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: ${bp.md}px) {
    font-size: 32px;
  }
`;
const SeeAll = styled(Link)`
  margin-left: auto;
  padding-left: 16px;
  font-size: 12px;
  text-decoration: none;
  white-space: nowrap;
  color: #383838;

  @media (min-width: ${bp.md}px) {
    font-size: 14px;
  }
`;
const RightArrow = styled.img`
  margin-left: 8px;
`;

export default function ({ children, title, to }) {
  return (
    <Section>
      <Container>
        <HeadingWrapper>
          <Heading>{title}</Heading>
          {to && (
            <SeeAll to={to}>
              See all <RightArrow src={rightArrowSvg} aria-hidden="true" alt="" />
            </SeeAll>
          )}
        </HeadingWrapper>
      </Container>

      {children}
    </Section>
  );
}
