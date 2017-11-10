import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Container from "../Container";
import rightArrowSvg from "./rightArrow.svg";

const Section = styled.section`margin-bottom: 48px;`;
const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const Heading = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: ${bp.md}px) {
    font-size: 32px;
  }
`;
const SeeAll = styled.a`
  margin-left: auto;
  padding-left: 16px;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  color: #383838;
`;
const RightArrow = styled.img`margin-left: 8px;`;

export default function({ children, title, href }) {
  return (
    <Section>
      <Container>
        <HeadingWrapper>
          <Heading>{title}</Heading>
          {href && (
            <SeeAll href={href}>
              See all{" "}
              <RightArrow src={rightArrowSvg} aria-hidden="true" alt="" />
            </SeeAll>
          )}
        </HeadingWrapper>
      </Container>

      {children}
    </Section>
  );
}
