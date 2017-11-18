import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import bp from "../../breakpoints";
import Filter from "./Filter";
import DatePicker from "../../UI/DatePicker";

import arrowRightSvg from "./arrowRight.svg";

const Body = styled.div`
  padding-top: 22px;
  @media (min-width: ${bp.sm}px) {
    padding-top: 10px;
  }
`;
const DateRange = styled.p`margin: 0 8px;`;
const DateRangeArrow = styled.img`margin: 0 1rem;`;
const DateRangeLabel = styled.span`
  display: inline-block;
  padding-bottom: 2px;
  border-bottom: ${props =>
    props.active ? "1px solid #0F7276" : "1px solid transparent"};
  font-size: 18px;
  color: ${props => (props.active ? "#0F7276" : "#636363")};
`;
const DatePickerWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default class extends React.Component {
  state = { startDate: null, endDate: null };

  static defaultProps = {};

  reset = () => {
    this.setState({ startDate: null, endDate: null });
  };

  render() {
    let dateText = "Dates";
    if (this.state.startDate) {
      dateText = this.state.startDate.format("MMM D");
    }

    if (this.state.endDate) {
      dateText += " – ";
      if (!this.state.endDate.isSame(this.state.startDate, "month"))
        dateText += this.state.endDate.format("MMM");

      dateText += " " + this.state.endDate.format("D");
    }

    const checkIn = this.state.startDate
      ? this.state.startDate.format("MMM D")
      : "Check in";
    const checkOut = this.state.endDate
      ? this.state.endDate.format("MMM D")
      : "Check out";

    return (
      <Filter buttonText={dateText} heading="When" onReset={this.reset}>
        <Body>
          <MediaQuery maxDeviceWidth={bp.sm - 1}>
            <DateRange>
              <DateRangeLabel active={!this.state.startDate}>
                {checkIn}
              </DateRangeLabel>
              <DateRangeArrow src={arrowRightSvg} alt="" />
              <DateRangeLabel
                active={this.state.startDate && !this.state.endDate}
              >
                {checkOut}
              </DateRangeLabel>
            </DateRange>
          </MediaQuery>
          <DatePickerWrap>
            <MediaQuery maxDeviceWidth={bp.sm - 1}>
              <DatePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })}
                orientation="vertical"
                numberOfMonths={2}
                navPrev=""
                navNext=""
              />
            </MediaQuery>
            <MediaQuery minDeviceWidth={bp.sm} maxDeviceWidth={bp.md - 1}>
              <DatePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })}
                numberOfMonths={1}
              />
            </MediaQuery>
            <MediaQuery minDeviceWidth={bp.md}>
              <DatePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })}
                numberOfMonths={2}
              />
            </MediaQuery>
          </DatePickerWrap>
        </Body>
      </Filter>
    );
  }
}
