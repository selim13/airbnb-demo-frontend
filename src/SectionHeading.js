import React from "react";
import styled from "styled-components";

import { bp } from "./vars";

import rightArrowSvg from "./right-arrow.svg";

const Heading = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: ${bp.tablet}) {
    font-size: 32px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 24px;
`;
const Link = styled.a`
  margin-left: auto;
  font-size: 14px;
  text-decoration: none;
  color: #383838;
`;

const RightArrow = styled.img`margin-left: 8px;`;

export default function({ href, children }) {
  return (
    <Wrap>
      <Heading>{children}</Heading>
      {href && (
        <Link href={href}>
          See all <RightArrow src={rightArrowSvg} aria-hidden="true" alt="" />
        </Link>
      )}
    </Wrap>
  );
}
