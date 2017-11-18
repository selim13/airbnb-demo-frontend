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

const Wrap = styled.div`position: relative;`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.active };
  }

  static defaultProps = {
    active: false,
    heading: "",
    buttonText: "",
    resetButtonTitle: "Reset",
    hasMobileHeaderSeparator: false,
    hasMobileFooter: false,
    onReset: () => {}
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <Button isActive={this.state.isOpen} onClick={this.toggle}>
          {this.props.buttonText}
        </Button>
        {this.state.isOpen && (
          <Container>
            <MediaQuery maxDeviceWidth={bp.sm - 1}>
              <MobileHeader separator={this.props.hasMobileHeaderSeparator}>
                <CloseButton onClick={this.close}>
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
                <CancelButton onClick={this.close}>Cancel</CancelButton>
                <ApplyButton onClick={this.close}>Apply</ApplyButton>
              </Footer>
            </MediaQuery>
            {this.props.hasMobileFooter && (
              <MediaQuery maxDeviceWidth={bp.sm - 1}>
                <MobileFooter>
                  <MobilePrimaryButton onClick={this.close}>
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
