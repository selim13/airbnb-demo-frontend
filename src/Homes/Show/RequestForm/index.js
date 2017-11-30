import React from "react";
import styled from "styled-components";

import { ToLg } from "../../../UI/mediaQueries";
import Reviews from "../../../UI/Reviews";
import Icon from "../../../UI/Icon";
import ManyViews from "../ManyViews";
import GuestsDropdown from "./GuestsDropdown";

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

const ControlsGroup = styled.div`
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
  border: 1px solid rgba(118, 118, 118, 0.2);

  color: #636363;
  font-size: 14px;
  font-family: inherit;

  background: #ffffff;

  &::placeholder {
    color: #636363;
  }
`;
const CheckInInput = Input.extend`
  border-right: none;
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

  handleToggleDropdown = option => {
    this.setState(
      prevState =>
        prevState.openedOption === option
          ? { openedOption: null }
          : { openedOption: option }
    );
  };

  handleCloseDropdown = () => this.setState({ openedOption: null });

  handleChangeOption = (option, newValues) => {
    this.setState({
      [option]: newValues
    });
  };

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

        <ControlsGroup>
          <DatesLabel>
            Check in
            <CheckInInput placeholder="mm/dd/yyyy" name="checkin" />
          </DatesLabel>
          <DatesLabel>
            Check out
            <Input placeholder="mm/dd/yyyy" name="checkout" />
          </DatesLabel>
        </ControlsGroup>

        <GuestsDropdown
          isOpen={this.state.openedOption === "guests"}
          maxGuests={3}
          maxInfants={2}
          values={this.state.guests}
          onClick={() => this.handleToggleDropdown("guests")}
          onValuesChange={newValues =>
            this.handleChangeOption("guests", newValues)
          }
          onCancel={this.handleCloseDropdown}
        />

        <RequestButton>Request a book</RequestButton>

        <ChargeTip>You won’t be charged yet</ChargeTip>

        <ManyViews mobile />
      </div>
    );
  }
}
