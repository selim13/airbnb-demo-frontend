import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { StickyContainer, Sticky } from "react-sticky";

import bp from "../../breakpoints";
import { MdOnly, ToLg, Lg } from "../../UI/mediaQueries";
import Container from "../../UI/Container";
import DotSeparator from "../../UI/DotSeparator";
import SeeAllButton from "../../UI/SeeAllButton";

import { Link, Section, SectionHeading, SectionParagraph } from "./styled";
import RequestForm from "./RequestForm";
import Header from "./Header";
import Nav from "./Nav";
import Avatar from "./Avatar";
import Properties from "./Properties";
import ManyViews from "./ManyViews";
import Cancellation from "./Cancellation";
import Amenities from "./Amenities";
import Reviews from "./Reviews";
import Host from "./Host";
import Neighborhood from "./Neighborhood";
import NeighborhoodMap from "./NeighborhoodMap";
import Similar from "./Similar";

import avatarImg from "./avatar.png";

function stickyRequestForm({ isSticky, style }) {
  return (
    <div
      style={{ ...style, paddingTop: isSticky ? 105 : 0, paddingBottom: 24 }}
    >
      <RequestForm />
    </div>
  );
}

const RequestFormWrap = styled.div`
  margin-top: 25px;
`;

const MainInfo = styled.div`
  margin-bottom: 24px;

  @media (min-width: ${bp.lg}px) {
    margin-bottom: 32px;
  }
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 4px;
  font-wight: bold;
  color: #383838;
  font-size: 24px;

  @media (min-width: ${bp.sm}px) {
    font-size: 36px;
  }
`;

const Subheading = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    font-size: 16px;
  }
`;

const AvatarWrap = styled.div`
  width: 40px;
  margin-top: 30px;

  @media (min-width: ${bp.sm}px) {
    width: 64px;
  }
`;

const Description = styled.p`
  margin-top: 0;
  color: #383838;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    font-size: 18px;
  }

  @media (min-width: ${bp.lg}px) {
    margin-top: 15px;
  }
`;

const ReportMobile = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  padding: 16px 0;
  border-top: 1px solid rgba(118, 118, 118, 0.2);
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  font-size: 18px;
  font-weight: 300;
`;

export default function() {
  return (
    <div>
      <Header />
      <Container>
        <article>
          <StickyContainer>
            <Row>
              <Col xs={12} lg={8}>
                <Nav />

                <MainInfo>
                  <Row>
                    <Col xs={10}>
                      <Heading>Romantic Cabana with view</Heading>
                      <Subheading>
                        Entire cabin <DotSeparator /> Armenia
                      </Subheading>
                      <Properties guests={2} type="Studio" beds={2} baths={2} />
                    </Col>
                    <Col xs={2}>
                      <AvatarWrap>
                        <Avatar image={avatarImg} name="Yudi &amp; Victoria" />
                      </AvatarWrap>
                    </Col>
                  </Row>
                </MainInfo>

                <MdOnly>
                  <ManyViews />
                </MdOnly>

                <Section>
                  <Description>
                    Located in the coffee region, in the Andean mountains of
                    Colombia, South America, a charming cabana made from bamboo,
                    with a great view and a "sendero" or pathway through the
                    bamboo forest which criss-crosses our 5 acre organic farm,
                    leading down to a stream. A place to relax and commune with
                    nature.
                  </Description>

                  <SeeAllButton label="Read more about the space" />
                  <br />
                  <Link href="#">Contact host</Link>
                </Section>

                <Section>
                  <SectionHeading>Amenities</SectionHeading>

                  <Amenities />
                </Section>

                <Section>
                  <SectionHeading>
                    Always communicate through Airbnb
                  </SectionHeading>

                  <SectionParagraph>
                    To protect your payment, never transfer money or communicate
                    outside of the Airbnb website or app.
                  </SectionParagraph>

                  <Link href="#">Learn more</Link>
                </Section>

                <Section>
                  <SectionHeading>House Rules</SectionHeading>

                  <SectionParagraph>
                    Check-in is anytime after 1PM<br />
                    Check out by 11AM
                  </SectionParagraph>

                  <SeeAllButton label="Read all rules" />
                </Section>

                <Section>
                  <SectionHeading>Cancellation</SectionHeading>
                  <Cancellation />
                </Section>

                <Reviews />

                <Host />

                <Neighborhood />
              </Col>
              <Col lg={4}>
                <Lg>
                  <RequestFormWrap>
                    <Sticky topOffset={-85}>{stickyRequestForm}</Sticky>
                  </RequestFormWrap>
                </Lg>
              </Col>
            </Row>
          </StickyContainer>
          <NeighborhoodMap />

          <ToLg>
            <ReportMobile>
              <Link href="#">Report this listing</Link>
            </ReportMobile>
          </ToLg>
        </article>
      </Container>

      <Similar />
    </div>
  );
}
