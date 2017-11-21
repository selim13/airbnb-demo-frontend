import React from "react";
import styled from "styled-components";
import pluralize from "pluralize";

import bp from "../../breakpoints";
import NumericInput from "../../UI/NumericInput";
import Dropdown from "../../UI/Dropdown";

import { ControlsGroup, Label, Caption } from "./styled";

export const Body = styled.div`
  padding: 40px 8px 8px;

  @media (min-width: ${bp.sm}px) {
    padding: 30px 16px 0 24px;
  }
`;

export default class extends React.Component {
  static defaultProps = {
    maxGuests: 10,
    maxInfants: 5,
    adults: 1,
    children: 0,
    infants: 0,
    onFilterChange: () => {},
    onReset: () => {}
  };

  guestsLabelFormatter(adults, children, infants) {
    const guests = adults + children;

    if (guests + infants > 1) {
      if (infants > 0) {
        return (
          `${guests} ${pluralize("guest", guests)}, ` +
          `${infants} ${pluralize("infant", infants)}`
        );
      } else {
        return `${guests} ${pluralize("guest", guests)}`;
      }
    }

    return "Guests";
  }

  render() {
    return (
      <Dropdown
        isOpen={this.props.isOpen}
        buttonText={this.guestsLabelFormatter(
          this.props.adults,
          this.props.children,
          this.props.infants
        )}
        heading="Guests"
        hasMobileHeaderSeparator
        hasMobileFooter
        onClick={this.props.onClick}
        onClose={this.props.onClose}
        onReset={this.props.onReset}
      >
        <Body>
          <ControlsGroup>
            <div>
              <Label>Adults</Label>
            </div>
            <NumericInput
              min={1}
              max={this.props.maxGuests - this.props.children}
              value={this.props.adults}
              onValueChange={adults =>
                this.props.onFilterChange({ adults: adults })}
            />
          </ControlsGroup>
          <ControlsGroup>
            <div>
              <Label>Children</Label>
              <Caption>Ages 2 &ndash; 12</Caption>
            </div>
            <NumericInput
              min={0}
              max={this.props.maxGuests - this.props.adults}
              value={this.props.children}
              onValueChange={value =>
                this.props.onFilterChange({ children: value })}
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
              value={this.props.infants}
              onValueChange={value =>
                this.props.onFilterChange({ infants: value })}
            />
          </ControlsGroup>
        </Body>
      </Dropdown>
    );
  }
}
