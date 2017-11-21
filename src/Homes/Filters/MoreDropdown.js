import React from "react";
import styled from "styled-components";
import BodyClassName from "react-body-classname";

import bp from "../../breakpoints";
import { Row, Col } from "react-flexbox-grid";
import Container from "../../UI/Container";
import Button from "../../UI/Button";
import { XsOnly, Sm } from "../../UI/MediaQueries";
import { MobileFooter, MobilePrimaryButton } from "../../UI/Dropdown/styled";
import MobileHeader from "../../UI/Dropdown/MobileHeader";

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

  overflow: auto;

  background: #ffffff;

  @media (min-width: ${bp.sm}px) {
    top: 134px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 8px 0;
  @media (min-width: ${bp.md}px) {
    justify-content: flex-end;
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

export const CancelButton = FooterButton.extend`
  margin-right: 0.5rem;
  padding: 0.75rem 0.5rem;
  color: #383838;
  cursor: pointer;
`;

export const SeeHomesButton = FooterButton.extend`
  padding: 0.75rem 1rem;
  font-weight: bold;
  color: #ffffff;
  background: #008489;
`;

export default class extends React.Component {
  static defaultProps = {
    isOpen: false,
    heading: "",
    buttonText: "",
    onClick: () => {},
    onClose: () => {},
    onReset: () => {}
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <Button isActive={this.props.isOpen} onClick={this.props.onClick}>
          {this.props.buttonText}
        </Button>
        {this.props.isOpen &&
          this.props.children && (
            <BodyClassName className="body--fixed">
              <Dropdown>
                <XsOnly>
                  <MobileHeader
                    heading={this.props.heading}
                    hasSeparator={this.props.hasMobileHeaderSeparator}
                    resetButtonTitle="Clear All"
                    onClose={this.props.onClose}
                    onReset={this.props.onReset}
                  />
                </XsOnly>

                <Container>
                  <Row>
                    <Col xs={12} md={8}>
                      {this.props.children}

                      <Sm>
                        <Footer>
                          <CancelButton onClick={this.props.onReset}>
                            Cancel
                          </CancelButton>
                          <SeeHomesButton onClick={this.props.onClose}>
                            See homes
                          </SeeHomesButton>
                        </Footer>
                      </Sm>

                      <XsOnly>
                        <MobileFooter>
                          <MobilePrimaryButton onClick={this.props.onClose}>
                            See homes
                          </MobilePrimaryButton>
                        </MobileFooter>
                      </XsOnly>
                    </Col>
                  </Row>
                </Container>
              </Dropdown>
            </BodyClassName>
          )}
      </Wrap>
    );
  }
}
