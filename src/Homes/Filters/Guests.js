import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import NumericInput from "../../UI/NumericInput";
import Filter from "./Filter";

import { ControlsGroup, Label, Caption } from "./styled";

export const Body = styled.div`
  padding: 40px 8px 8px;

  @media (min-width: ${bp.sm}px) {
    padding: 30px 16px 0 24px;
  }
`;

export default class extends React.Component {
  state = { adults: 1, children: 0, infants: 0 };

  static defaultProps = {
    maxGuests: 10,
    maxInfants: 5
  };

  reset = () => {
    this.setState({ adults: 1, children: 0, infants: 0 });
  };

  guestsLabelFormatter(adults, children, infants) {
    const guestsTotal = adults + children + infants;

    // TODO: display infants separately
    if (guestsTotal > 1) return `${guestsTotal} guests`;

    return "Guests";
  }

  render() {
    return (
      <Filter
        buttonText={this.guestsLabelFormatter(
          this.state.adults,
          this.state.children,
          this.state.infants
        )}
        heading="Guests"
        hasMobileHeaderSeparator
        hasMobileFooter
        onReset={this.reset}
      >
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
      </Filter>
    );
  }
}
