import styled from "styled-components";

export const Link = styled.a`
  border-bottom: 1px solid transparent;
  color: #008489;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    border-color: #008489;
  }
`;

export const Section = styled.section`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

export const SectionHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 16px;
  font-weight: bold;
`;

export const SectionParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 300;
  color: #383838;
`;
