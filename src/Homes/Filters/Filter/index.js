import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import bp from "../../../breakpoints";
import closeSvg from "./close.svg";

import Button from "../../../UI/Button";
import {
  Container,
  MobileHeader,
  CloseButton,
  ResetButton,
  Footer,
  CancelButton,
  ApplyButton,
  MobileFooter,
  MobilePrimaryButton
} from "./styled";

const Wrap = styled.div`
  position: relative;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`;

export default class extends React.Component {
  static defaultProps = {
    isOpen: false,
    heading: "",
    buttonText: "",
    resetButtonTitle: "Reset",
    hasMobileHeaderSeparator: false,
    hasMobileFooter: false,
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
            <Container>
              <MediaQuery maxDeviceWidth={bp.sm - 1}>
                <MobileHeader separator={this.props.hasMobileHeaderSeparator}>
                  <CloseButton onClick={this.props.onClose}>
                    <img src={closeSvg} alt="" width="16" height="16" />
                  </CloseButton>
                  {this.props.heading}
                  <ResetButton onClick={this.props.onReset}>
                    {this.props.resetButtonTitle}
                  </ResetButton>
                </MobileHeader>
              </MediaQuery>

              {this.props.children}

              <MediaQuery minDeviceWidth={bp.sm}>
                <Footer>
                  <CancelButton onClick={this.props.onReset}>
                    Cancel
                  </CancelButton>
                  <ApplyButton onClick={this.props.onClose}>Apply</ApplyButton>
                </Footer>
              </MediaQuery>
              {this.props.hasMobileFooter && (
                <MediaQuery maxDeviceWidth={bp.sm - 1}>
                  <MobileFooter>
                    <MobilePrimaryButton onClick={this.props.onClose}>
                      Save
                    </MobilePrimaryButton>
                  </MobileFooter>
                </MediaQuery>
              )}
            </Container>
          )}
      </Wrap>
    );
  }
}
