import React from "react";
import styled from "styled-components";

import bp from "../../../breakpoints";
import DateRangePicker from "../../../UI/DateRangePicker";

const Wrap = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  margin-top: 10px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  background: #ffffff;

  &:before {
    content: "";
    position: absolute;
    top: -11px;
    left: ${props =>
      props.rightArrow ? "calc(50% + 50px)" : "calc(50% - 60px)"};
    display: inline-block;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid rgba(72, 72, 72, 0.2);
  }

  &:after {
    content: "";
    position: absolute;
    top: -10px;
    left: ${props =>
      props.rightArrow ? "calc(50% + 51px)" : "calc(50% - 59px)"};
    display: inline-block;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
  }
`;

const Tip = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  padding: 0 24px;

  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-top: 8px;
    font-size: 16px;
  }
`;

const BottomWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ClearButton = styled.button`
  display: inline-block;
  padding: 16px 20px;
  border: none;
  color: #008489;
  font-size: 16px;
  background: none;
  user-select: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function DateDropdown({
  isOpen = false,
  rightArrow = false,
  children,
  date,
  onReset = () => {},
  onDateChange = () => {}
}) {
  return isOpen ? (
    <Wrap rightArrow={rightArrow}>
      <DateRangePicker
        numberOfMonths={1}
        startDate={date}
        onDatesChange={({ startDate, endDate }) => onDateChange(startDate)}
      />

      <Tip>
        Minimum stay varies<br />
        Updated 1 day ago
      </Tip>

      <BottomWrap>
        <ClearButton onClick={onReset}>Clear dates</ClearButton>
      </BottomWrap>
    </Wrap>
  ) : null;
}
