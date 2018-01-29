import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { StickyContainer, Sticky } from 'react-sticky';
import { Element as ScrollElement, scrollSpy } from 'react-scroll';

import { MdOnly, ToLg, Lg } from '../../UI/mediaQueries';
import Container from '../../UI/Container';
import DotSeparator from '../../UI/DotSeparator';
import StickyContainerCol from '../../UI/StickyContainerCol';
import Dialog from '../../UI/Dialog';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import {
  AvatarWrap,
  Heading,
  Link,
  ModalRequestFormWrap,
  Overview,
  PageNavBar,
  ReportFlag,
  ReportMobile,
  ReportSticky,
  RequestFormOffset,
  RequestFormWrap,
  Section,
  SectionHeading,
  Paragraph,
  Subheading,
} from './styled';
import Amenities from './Amenities';
import Avatar from './Avatar';
import Cancellation from './Cancellation';
import Description from './Description';
import Explore from './Explore';
import Header from './Header';
import Host from './Host';
import ManyViews from './ManyViews';
import Nav from './Nav';
import Neighborhood from './Neighborhood';
import NeighborhoodMap from './NeighborhoodMap';
import Properties from './Properties';
import RequestForm from './RequestForm';
import RequestPanel from './RequestPanel';
import Reviews from './Reviews';
import Rules from './Rules';
import Similar from './Similar';

import avatarImg from './avatar.png';
import flagSvg from './flag.svg';

const navBarHeight = 80;
const pageNavHeight = 50;

export default class Show extends React.Component {
  state = { isRequestFormOpened: false, isSaved: false };

  componentDidMount() {
    scrollSpy.update();
  }

  handleOpenForm = () => this.setState({ isRequestFormOpened: true });
  handleCloseForm = () => this.setState({ isRequestFormOpened: false });

  handleToggleSave = () => this.setState(prevState => ({ isSaved: !prevState.isSaved }));

  stickyRequestForm = ({ isSticky, style }) => (
    <div
      style={{
        ...style,
        paddingTop: isSticky ? navBarHeight + 24 + pageNavHeight : 0,
        paddingBottom: 24,
        zIndex: 1,
      }}
    >
      <RequestFormWrap>
        <RequestForm />
      </RequestFormWrap>

      <ReportSticky href="#">
        <ReportFlag src={flagSvg} alt="" width="16" height="16" />
        Report this listing
      </ReportSticky>
    </div>
  );

  stickyNavigation = ({ isSticky, style }) => (
    <div
      style={{
        ...style,
        top: isSticky ? navBarHeight : 0,
        left: 0,
        width: '100%',
        zIndex: 20,
      }}
    >
      {isSticky ? (
        <PageNavBar>
          <Container>
            <Nav
              scrollOffset={-navBarHeight - pageNavHeight}
              isSticky
              isSaved={this.state.isSaved}
              onSave={this.handleToggleSave}
            />
          </Container>
        </PageNavBar>
      ) : (
        <PageNavBar>
          <Nav scrollOffset={-navBarHeight - pageNavHeight} />
        </PageNavBar>
      )}
    </div>
  );

  stickyRequestPanel = ({ style }) => (
    <div
      style={{
        ...style,
        bottom: 0,
        top: 'auto',
        zIndex: 1,
      }}
    >
      <RequestPanel onClick={this.handleOpenForm} />
    </div>
  );

  render() {
    return (
      <div>
        <ToLg>
          <Dialog
            isOpen={this.state.isRequestFormOpened}
            contentLabel="Request a book"
            onClose={this.handleCloseForm}
          >
            <ModalRequestFormWrap>
              <RequestForm isModal isSaved={this.state.isSaved} onSave={this.handleToggleSave} />
            </ModalRequestFormWrap>
          </Dialog>
        </ToLg>

        <StickyContainer>
          <Navbar searchPlaceholder="Search" />
          <Header isSaved={this.state.isSaved} onSave={this.handleToggleSave} />
          <StickyContainer>
            <main>
              <Container>
                <article>
                  <Row>
                    <Col xs={12} lg={8}>
                      <Sticky topOffset={-navBarHeight}>{this.stickyNavigation}</Sticky>

                      <ScrollElement name="overview">
                        <Overview>
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
                                <Avatar image={avatarImg} name="Yudi &amp; Victoria" superhost />
                              </AvatarWrap>
                            </Col>
                          </Row>
                        </Overview>

                        <MdOnly>
                          <ManyViews />
                        </MdOnly>

                        <Section>
                          <Description />
                          <Link href="#">Contact host</Link>
                        </Section>

                        <Section>
                          <SectionHeading>Amenities</SectionHeading>

                          <Amenities
                            summary={['internet', 'wifi', 'familyFriendly', 'freePremisesParking']}
                            selected={[
                              'breakfast',
                              'dryer',
                              'essentials',
                              'familyFriendly',
                              'freePremisesParking',
                              'hangers',
                              'internet',
                              'washer',
                              'wifi',
                            ]}
                          />
                        </Section>

                        <Section>
                          <SectionHeading>Always communicate through Airbnb</SectionHeading>

                          <Paragraph>
                            To protect your payment, never transfer money or communicate outside of
                            the Airbnb website or app.
                          </Paragraph>

                          <Link href="#">Learn more</Link>
                        </Section>

                        <Section>
                          <SectionHeading>House Rules</SectionHeading>

                          <Rules />
                        </Section>

                        <Section>
                          <SectionHeading>Cancellation</SectionHeading>
                          <Cancellation />
                        </Section>
                      </ScrollElement>

                      <ScrollElement name="reviews">
                        <Reviews />
                      </ScrollElement>

                      <ScrollElement name="host">
                        <Host />
                      </ScrollElement>

                      <ScrollElement name="location">
                        <Neighborhood />
                      </ScrollElement>
                    </Col>

                    {/* NOTE: StickyContainer needs to be a col itself to properly
                calculate it's height  */}
                    <Lg>
                      <StickyContainerCol lg={4}>
                        <RequestFormOffset>
                          <Sticky topOffset={-navBarHeight - pageNavHeight}>
                            {this.stickyRequestForm}
                          </Sticky>
                        </RequestFormOffset>
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
            <Sticky>{this.stickyRequestPanel}</Sticky>
          </ToLg>
        </StickyContainer>
      </div>
    );
  }
}
