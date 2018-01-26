import styled from 'styled-components';

import bp from '../../breakpoints';

export const Link = styled.a`
  border-bottom: 1px solid transparent;
  color: #0f7276;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    border-color: #0f7276;
  }
`;

export const PageNavBar = styled.div`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  background: #ffffff;
`;

export const TextSubheading = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1em;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Section = styled.section`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  font-size: 16px;
  font-weight: 300;
  color: #383838;
`;

export const SectionHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 16px;
  font-weight: bold;
`;

export const RequestFormOffset = styled.div`
  margin-top: 24px;
`;

export const RequestFormWrap = styled.div`
  padding: 15px 24px 24px;
  border: 1px solid rgba(118, 118, 118, 0.2);
`;

export const ModalRequestFormWrap = styled.div`
  @media (min-width: ${bp.sm}px) {
    width: 320px;
  }
`;

export const Overview = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;

  @media (min-width: ${bp.lg}px) {
    margin-top: 24px;
    margin-bottom: 32px;
  }
`;

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 4px;
  font-wight: bold;
  color: #383838;
  font-size: 24px;

  @media (min-width: ${bp.sm}px) {
    font-size: 36px;
  }
`;

export const Subheading = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    font-size: 16px;
  }
`;

export const AvatarWrap = styled.div`
  width: 40px;
  margin-top: 30px;

  @media (min-width: ${bp.sm}px) {
    width: 64px;
  }
`;

export const ReadMoreWrap = styled.div`
  margin-bottom: 24px;
`;

export const ReportMobile = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  padding: 16px 0;
  border-top: 1px solid rgba(118, 118, 118, 0.2);
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  font-size: 18px;
  font-weight: 300;
`;

export const ReportSticky = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 0;
  color: #383838;
  font-size: 14px;
  text-decoration: none;
`;

export const ReportFlag = styled.img`
  margin-right: 8px;
`;

export const ShortHr = styled.hr`
  max-width: 65px;
  height: 1px;
  margin: 4px 0 20px;
  border: none;
  color: rgba(118, 118, 118, 0.2);
  background-color: rgba(118, 118, 118, 0.2);
`;
