import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';
import { Row, Col } from 'react-flexbox-grid';
import Container from '../../UI/Container';
import Button from '../../UI/Button';
import { XsOnly, Sm, ToMd, Md } from '../../UI/mediaQueries';
import { MobilePrimaryButton } from '../../UI/Dropdown/styled';
import MobileHeader from '../../UI/Dropdown/MobileHeader';
import Overlay from '../../UI/Overlay';

const Wrap = styled.div`
  position: relative;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`;

const Dropdown = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-flow: column nowrap;

  @media (min-width: ${bp.sm}px) {
    top: 134px;
  }
`;

const MapOverlay = Overlay.extend`
  top: 135px;
  left: auto;

  width: 33.33333%;
  padding-left: 8px;

  @media (min-width: ${bp.md}px) {
    display: block;
  }

  @media (min-width: ${bp.lg}px) {
    width: calc(50% - 165px);
  }
`;

const Fill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  background: #ffffff;

  @media (min-width: ${bp.md}px) {
    width: calc(66.6666% + 8px);
  }

  @media (min-width: ${bp.lg}px) {
    width: calc(50% + 173px);
  }
`;

const Footer = styled.div`
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  padding: 8px 0;

  @media (min-width: ${bp.sm}px) {
    border-top: none;
  }

  @media (min-width: ${bp.md}px) {
    justify-content: flex-end;
  }
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}px) {
    justify-content: flex-end;
  }
`;

const Body = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 15px;
  padding-bottom: 32px;

  @media (min-width: ${bp.sm}px) {
    padding-top: 20px;
  }
  @media (min-width: ${bp.lg}px) {
    padding-top: 20px;
    padding-bottom: 24px;
  }
`;

const FooterButton = styled.button`
  display: block;
  border: none;
  border-radius: 4px;

  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  background: none;

  cursor: pointer;
  user-select: none;
`;

const CancelButton = FooterButton.extend`
  margin-right: 0.5rem;
  padding: 0.75rem 0.5rem;
  color: #383838;
  cursor: pointer;
`;

const SeeHomesButton = FooterButton.extend`
  padding: 0.75rem 1rem;
  font-weight: bold;
  color: #ffffff;
  background: #008489;
`;

export default class extends React.Component {
  static defaultProps = {
    isOpen: false,
    heading: '',
    buttonText: '',
    collapsedButtonText: '',
    onClick: () => {},
    onClose: () => {},
    onReset: () => {},
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <ToMd>
          <Button isActive={this.props.isOpen} onClick={this.props.onClick}>
            {this.props.collapsedButtonText}
          </Button>
        </ToMd>
        <Md>
          <Button isActive={this.props.isOpen} onClick={this.props.onClick}>
            {this.props.buttonText}
          </Button>
        </Md>
        {this.props.isOpen &&
          this.props.children && (
            <div>
              <Dropdown>
                <Fill />

                <XsOnly>
                  <MobileHeader
                    heading={this.props.heading}
                    hasSeparator={this.props.hasMobileHeaderSeparator}
                    resetButtonTitle="Clear All"
                    onClose={this.props.onClose}
                    onReset={this.props.onReset}
                  />
                </XsOnly>

                <Body>
                  <Container>
                    <Row>
                      <Col xs={12} md={8}>
                        {this.props.children}
                      </Col>
                    </Row>
                  </Container>
                </Body>
                <Footer>
                  <Container>
                    <Row>
                      <Col xs={12} md={8}>
                        <FooterButtons>
                          <XsOnly>
                            <MobilePrimaryButton onClick={this.props.onClose}>
                              See homes
                            </MobilePrimaryButton>
                          </XsOnly>
                          <Sm>
                            <CancelButton onClick={this.props.onReset}>
                              Cancel
                            </CancelButton>
                            <SeeHomesButton onClick={this.props.onClose}>
                              See homes
                            </SeeHomesButton>
                          </Sm>
                        </FooterButtons>
                      </Col>
                    </Row>
                  </Container>
                </Footer>

                <Md>
                  <MapOverlay onClick={this.props.onClose} />
                </Md>
              </Dropdown>
            </div>
          )}
      </Wrap>
    );
  }
}
