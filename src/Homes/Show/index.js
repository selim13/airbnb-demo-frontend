import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { StickyContainer, Sticky } from "react-sticky";

import { MdOnly, ToLg, Lg } from "../../UI/mediaQueries";
import Container from "../../UI/Container";
import DotSeparator from "../../UI/DotSeparator";
import SeeAllButton from "../../UI/SeeAllButton";
import StickyContainerCol from "../../UI/StickyContainerCol";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import {
  Link,
  PageNavBar,
  Section,
  SectionHeading,
  SectionParagraph,
  ReportSticky,
  ReportFlag,
  Overview,
  Heading,
  Subheading,
  AvatarWrap,
  Description,
  ReportMobile,
  RequestFormWrap
} from "./styled";
import RequestForm from "./RequestForm";
import RequestPanel from "./RequestPanel";
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
import Explore from "./Explore";

import avatarImg from "./avatar.png";
import flagSvg from "./flag.svg";

const navBarHeight = 80;
const pageNavHeight = 50;
function stickyRequestForm({ isSticky, style }) {
  return (
    <div
      style={{
        ...style,
        paddingTop: isSticky ? navBarHeight + 24 + pageNavHeight : 0,
        paddingBottom: 24
      }}
    >
      <RequestForm />
      <ReportSticky href="#">
        <ReportFlag src={flagSvg} alt="" width="16" height="16" />
        Report this listing
      </ReportSticky>
    </div>
  );
}

function stickyNavigation({ isSticky, style }) {
  return (
    <div
      style={{
        ...style,
        top: isSticky ? navBarHeight : 0,
        left: 0,
        width: "100%",
        zIndex: 1
      }}
    >
      {isSticky ? (
        <PageNavBar>
          <Container>
            <Nav />
          </Container>
        </PageNavBar>
      ) : (
        <PageNavBar>
          <Nav />
        </PageNavBar>
      )}
    </div>
  );
}

function stickyRequestPanel({ isSticky, style }) {
  return (
    <div
      style={{
        ...style,
        bottom: 0,
        top: "auto"
      }}
    >
      <RequestPanel />
    </div>
  );
}

export default function() {
  return (
    <div>
      <StickyContainer>
        <Navbar searchPlaceholder="Search" />
        <Header />
        <StickyContainer>
          <main>
            <Container>
              <article>
                <Row>
                  <Col xs={12} lg={8}>
                    <Sticky topOffset={-navBarHeight}>
                      {stickyNavigation}
                    </Sticky>

                    <Overview id="overview">
                      <Row>
                        <Col xs={10}>
                          <Heading>Romantic Cabana with view</Heading>
                          <Subheading>
                            Entire cabin <DotSeparator /> Armenia
                          </Subheading>
                          <Properties
                            guests={2}
                            type="Studio"
                            beds={2}
                            baths={2}
                          />
                        </Col>
                        <Col xs={2}>
                          <AvatarWrap>
                            <Avatar
                              image={avatarImg}
                              name="Yudi &amp; Victoria"
                            />
                          </AvatarWrap>
                        </Col>
                      </Row>
                    </Overview>

                    <MdOnly>
                      <ManyViews />
                    </MdOnly>

                    <Section>
                      <Description>
                        Located in the coffee region, in the Andean mountains of
                        Colombia, South America, a charming cabana made from
                        bamboo, with a great view and a "sendero" or pathway
                        through the bamboo forest which criss-crosses our 5 acre
                        organic farm, leading down to a stream. A place to relax
                        and commune with nature.
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
                        To protect your payment, never transfer money or
                        communicate outside of the Airbnb website or app.
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

                    <Reviews id="reviews" />

                    <Host id="host" />

                    <Neighborhood id="location" />
                  </Col>

                  {/* NOTE: StickyContainer needs to be a col itself to properly
                calculate it's height  */}
                  <Lg>
                    <StickyContainerCol lg={4}>
                      <RequestFormWrap>
                        <Sticky topOffset={-navBarHeight - pageNavHeight}>
                          {stickyRequestForm}
                        </Sticky>
                      </RequestFormWrap>
                    </StickyContainerCol>
                  </Lg>
                </Row>

                <NeighborhoodMap />

                <ToLg>
                  <ReportMobile>
                    <Link href="#">Report this listing</Link>
                  </ReportMobile>
                </ToLg>
              </article>
            </Container>

            <Similar />

            <Container>
              <Explore />
            </Container>
          </main>
          <Footer />
        </StickyContainer>

        <ToLg>
          <Sticky>{stickyRequestPanel}</Sticky>
        </ToLg>
      </StickyContainer>
      {/* <RequestPanel /> */}
    </div>
  );
}
