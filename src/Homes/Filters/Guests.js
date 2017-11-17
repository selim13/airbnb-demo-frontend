import React from "react";
import MediaQuery from "react-responsive";

import bp from "../../breakpoints";
import NumericInput from "../../UI/NumericInput";
import Dropdown from "../../UI/Dropdown";
import {
  Container,
  MobileHeader,
  CloseButton,
  ResetButton,
  Body,
  ControlsGroup,
  Label,
  Caption,
  Footer,
  CancelButton,
  ApplyButton,
  MobileFooter,
  MobilePrimaryButton
} from "./styled";

import closeSvg from "./close.svg";

export default class extends React.Component {
  state = { adults: 1, children: 0, infants: 0 };

  static defaultProps = {
    maxGuests: 10,
    maxInfants: 5
  };

  reset = () => {
    this.setState({ adults: 1, children: 0, infants: 0 });
  };

  render() {
    let buttonText = "Guests";
    // TODO: display infants separately
    const guestsTotal =
      this.state.adults + this.state.children + this.state.infants;
    if (guestsTotal > 1) buttonText = `${guestsTotal} guests`;

    return (
      <Dropdown buttonText={buttonText}>
        <Container>
          <MediaQuery maxDeviceWidth={bp.sm}>
            <MobileHeader>
              <CloseButton>
                <img src={closeSvg} alt="" />
              </CloseButton>
              When
              <ResetButton onClick={this.reset}>Reset</ResetButton>
            </MobileHeader>
          </MediaQuery>
          <Body>
            <ControlsGroup>
              <div>
                <Label>Adults</Label>
              </div>
              <NumericInput
                min={1}
                max={this.props.maxGuests - this.state.children}
                value={this.state.adults}
                onValueChange={value => this.setState({ adults: value })}
              />
            </ControlsGroup>
            <ControlsGroup>
              <div>
                <Label>Children</Label>
                <Caption>Ages 2 &ndash; 12</Caption>
              </div>
              <NumericInput
                min={0}
                max={this.props.maxGuests - this.state.adults}
                value={this.state.children}
                onValueChange={value => this.setState({ children: value })}
              />
            </ControlsGroup>
            <ControlsGroup>
              <div>
                <Label>Infants</Label>
                <Caption>Under 2</Caption>
              </div>
              <NumericInput
                min={0}
                max={this.props.maxInfants}
                value={this.state.infants}
                onValueChange={value => this.setState({ infants: value })}
              />
            </ControlsGroup>
          </Body>
          <MediaQuery minDeviceWidth={bp.sm}>
            <Footer>
              <CancelButton>Cancel</CancelButton>
              <ApplyButton>Apply</ApplyButton>
            </Footer>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={bp.sm - 1}>
            <MobileFooter>
              <MobilePrimaryButton>Save</MobilePrimaryButton>
            </MobileFooter>
          </MediaQuery>
        </Container>
      </Dropdown>
    );
  }
}
