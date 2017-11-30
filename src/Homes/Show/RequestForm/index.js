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

const InputsGroup = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 16px;
`;

const DatesLabel = styled.label`
  position: relative;
  width: 100%;
  font-size: 12px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 0.75rem;
  border: ${props =>
    props.isActive
      ? "1px solid #008489"
      : "1px solid rgba(118, 118, 118, 0.2)"};

  color: #636363;
  font-size: 14px;
  font-family: inherit;

  background: #ffffff;

  &::placeholder {
    color: #636363;
  }
`;
const CheckInInput = Input.extend`
  ${props => !props.isActive && "border-right: none;"};
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
    checkIn: null,
    checkOut: null,
    guests: { adults: 1, children: 0, infants: 0 }
  };

  handleToggleDropdown = option => {
    this.setState(
      prevState =>
        prevState.openedOption === option
          ? { openedOption: null }
          : { openedOption: option }
    );
  };

  handleCloseDropdown = () => this.setState({ openedOption: null });

  handleResetDates = () =>
    this.setState({ openedOption: false, checkIn: null, checkOut: null });

  handleChangeDate = (type, date) =>
    this.setState({
      [type]: date,
      openedOption: type === "checkIn" ? "checkOut" : null
    });

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

        <InputsGroup>
          <DatesLabel>
            Check in
            <CheckInInput
              placeholder="mm/dd/yyyy"
              name="checkIn"
              value={
                this.state.checkIn
                  ? this.state.checkIn.format("MM/DD/YYYY")
                  : ""
              }
              readOnly
              isActive={this.state.openedOption === "checkIn"}
              onFocus={() => this.handleToggleDropdown("checkIn")}
            />
          </DatesLabel>
          <DatesLabel>
            Check out
            <Input
              placeholder="mm/dd/yyyy"
              name="checkOut"
              value={
                this.state.checkOut
                  ? this.state.checkOut.format("MM/DD/YYYY")
                  : ""
              }
              readOnly
              isActive={this.state.openedOption === "checkOut"}
              onFocus={() => this.handleToggleDropdown("checkOut")}
            />
          </DatesLabel>

          <DateDropdown
            isOpen={this.state.openedOption === "checkIn"}
            date={this.state.checkIn}
            onDateChange={date => this.handleChangeDate("checkIn", date)}
            onReset={this.handleResetDates}
          />
          <DateDropdown
            isOpen={this.state.openedOption === "checkOut"}
            date={this.state.checkOut}
            rightArrow
            onDateChange={date => this.handleChangeDate("checkOut", date)}
            onReset={this.handleResetDates}
          />
        </InputsGroup>

        <GuestsDropdown
          isOpen={this.state.openedOption === "guests"}
          maxGuests={3}
          maxInfants={2}
          values={this.state.guests}
          onClick={() => this.handleToggleDropdown("guests")}
          onValuesChange={newValues => this.handleChangeGuests(newValues)}
          onCancel={this.handleCloseDropdown}
        />

        <RequestButton>Request a book</RequestButton>

        <ChargeTip>You won’t be charged yet</ChargeTip>

        <ManyViews mobile />
      </div>
    );
  }
}
