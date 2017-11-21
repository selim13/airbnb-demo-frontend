import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import Filter from "./Filter";
import { XsOnly, SmOnly, Md } from "../../UI/MediaQueries";
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
  static defaultProps = {
    onFilterChange: () => {},
    onReset: () => {}
  };

  dateLabelFormatter(startDate, endDate) {
    if (startDate && !endDate) {
      return startDate.format("MMM D");
    }

    if (startDate && endDate) {
      if (endDate.isSame(startDate, "month"))
        return startDate.format("MMM D") + " – " + endDate.format("D");
      else return startDate.format("MMM D") + " – " + endDate.format("MMM D");
    }

    return "Dates";
  }

  render() {
    const checkIn = this.props.startDate
      ? this.props.startDate.format("MMM D")
      : "Check in";
    const checkOut = this.props.endDate
      ? this.props.endDate.format("MMM D")
      : "Check out";

    return (
      <Filter
        isOpen={this.props.isOpen}
        buttonText={this.dateLabelFormatter(
          this.props.startDate,
          this.props.endDate
        )}
        heading="When"
        onClick={this.props.onClick}
        onClose={this.props.onClose}
        onReset={this.props.onReset}
      >
        <Body>
          <XsOnly>
            <DateRange>
              <DateRangeLabel active={!this.props.startDate}>
                {checkIn}
              </DateRangeLabel>
              <DateRangeArrow src={arrowRightSvg} alt="" />
              <DateRangeLabel
                active={this.props.startDate && !this.props.endDate}
              >
                {checkOut}
              </DateRangeLabel>
            </DateRange>
          </XsOnly>
          <DatePickerWrap>
            <XsOnly>
              <DatePicker
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                onDatesChange={({ startDate, endDate }) =>
                  this.props.onFilterChange({ startDate, endDate })}
                orientation="vertical"
                numberOfMonths={2}
                navPrev=""
                navNext=""
              />
            </XsOnly>
            <SmOnly>
              <DatePicker
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                onDatesChange={({ startDate, endDate }) =>
                  this.props.onFilterChange({ startDate, endDate })}
                numberOfMonths={1}
              />
            </SmOnly>
            <Md>
              <DatePicker
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                onDatesChange={({ startDate, endDate }) =>
                  this.props.onFilterChange({ startDate, endDate })}
                numberOfMonths={2}
              />
            </Md>
          </DatePickerWrap>
        </Body>
      </Filter>
    );
  }
}
