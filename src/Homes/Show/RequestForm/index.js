import React from "react";
import styled from "styled-components";

import { ToLg } from "../../../UI/mediaQueries";
import Reviews from "../../../UI/Reviews";
import Icon from "../../../UI/Icon";
import ManyViews from "../ManyViews";
import GuestsDropdown from "./GuestsDropdown";
import DateDropdown from "./DateDropdown";

const Price = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: #383838;
  font-size: 24px;
  font-weight: bold;
`;

const Caption = styled.small`
  color: #636363;
  font-size: 12px;
`;

const IconButton = styled.button`
  margin-left: 16px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
  color: #767676;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Button = styled.button`
  display: block;
  width: 100%;
  border: none;
  font-family: inherit;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
`;

const RequestButton = Button.extend`
  padding: 0.75rem 1rem;
  margin-bottom: 16px;
  border-radius: 4px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  background: #ff5a5f;

  &:hover,
  &:focus {
    background: #f53d43;
  }

  &:active {
    background: #ed262c;
  }
`;

const ChargeTip = styled.p`
  margin-bottom: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  color: #383838;
  font-size: 12px;
  text-align: center;
`;

export default class RequestForm extends React.Component {
  state = {
    openedOption: null,
    dates: { startDate: null, endDate: null },
    guests: { adults: 1, children: 0, infants: 0 }
  };

  handleDropdownToggle = option => {
    this.setState(
      prevState =>
        prevState.openedOption === option
          ? { openedOption: null }
          : { openedOption: option }
    );
  };

  handleDropdownClose = () => this.setState({ openedOption: null });

  handleDatesReset = () =>
    this.setState({
      openedOption: false,
      dates: { startDate: null, endDate: null }
    });

  handleDatesChange = dates => {
    this.setState(prevState => {
      if (!dates.endDate) return { dates, openedOption: "checkOut" };
      if (!dates.startDate) return { dates, openedOption: "checkIn" };
      if (dates.startDate && dates.startDate)
        return { dates, openedOption: null };
    });
  };

  handleChangeGuests = guests => this.setState({ guests });

  render() {
    return (
      <div>
        <TopWrap>
          <div>
            <Price>
              $41 <Caption>per night</Caption>
            </Price>
            <Reviews rating={5} count={111} />
          </div>
          <div>
            <ToLg>
              <IconButton>
                <Icon icon="share" />
              </IconButton>
              <IconButton>
                <Icon icon="heartOutline" />
              </IconButton>
            </ToLg>
          </div>
        </TopWrap>

        <DateDropdown
          openedOption={this.state.openedOption}
          dates={this.state.dates}
          onFocusInput={input => this.handleDropdownToggle(input)}
          onClose={this.handleDropdownClose}
          onReset={this.handleDatesReset}
          onDatesChange={this.handleDatesChange}
        />

        <GuestsDropdown
          isOpen={this.state.openedOption === "guests"}
          maxGuests={3}
          maxInfants={2}
          values={this.state.guests}
          onClick={() => this.handleDropdownToggle("guests")}
          onValuesChange={newValues => this.handleChangeGuests(newValues)}
          onCancel={this.handleDropdownClose}
        />

        <RequestButton>Request a book</RequestButton>

        <ChargeTip>You won’t be charged yet</ChargeTip>

        <ManyViews mobile />
      </div>
    );
  }
}