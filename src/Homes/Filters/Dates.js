import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import Dropdown from "../../UI/Dropdown";
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

function dateLabelFormatter(startDate, endDate) {
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

export default function({
  isOpen = false,
  startDate = null,
  endDate = null,
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  const checkIn = startDate ? startDate.format("MMM D") : "Check in";
  const checkOut = endDate ? endDate.format("MMM D") : "Check out";

  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={dateLabelFormatter(startDate, endDate)}
      heading="When"
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <Body>
        <XsOnly>
          <DateRange>
            <DateRangeLabel active={!startDate}>{checkIn}</DateRangeLabel>
            <DateRangeArrow src={arrowRightSvg} alt="" width="18" height="11" />
            <DateRangeLabel active={startDate && !endDate}>
              {checkOut}
            </DateRangeLabel>
          </DateRange>
        </XsOnly>
        <DatePickerWrap>
          <XsOnly>
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              onDatesChange={({ startDate, endDate }) =>
                onFilterChange({ startDate, endDate })}
              orientation="vertical"
              numberOfMonths={2}
              navPrev=""
              navNext=""
            />
          </XsOnly>
          <SmOnly>
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              onDatesChange={({ startDate, endDate }) =>
                onFilterChange({ startDate, endDate })}
              numberOfMonths={1}
            />
          </SmOnly>
          <Md>
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              onDatesChange={({ startDate, endDate }) =>
                onFilterChange({ startDate, endDate })}
              numberOfMonths={2}
            />
          </Md>
        </DatePickerWrap>
      </Body>
    </Dropdown>
  );
}
