import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import bp from '../../../breakpoints';
import DateRangePicker from '../../../UI/DateRangePicker';

const Wrap = styled.div`
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
  border-right-color: transparent;
  border-color: ${props => props.selectedInput === 'checkIn' && '#008489'};
`;
const CheckOutInput = Input.extend`
  ${props => props.selectedInput === 'checkIn' && 'border-left-color: transparent;'};
  border-color: ${props => props.selectedInput === 'checkOut' && '#008489'};
`;

const Dropdown = styled.div`
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
    content: '';
    position: absolute;
    top: -11px;
    left: ${props => (props.rightArrow ? 'calc(50% + 50px)' : 'calc(50% - 60px)')};
    display: inline-block;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid rgba(72, 72, 72, 0.2);
  }

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: ${props => (props.rightArrow ? 'calc(50% + 51px)' : 'calc(50% - 59px)')};
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

class DateDropdown extends React.Component {
  static defaultProps = {
    openedOption: false,
    dates: { startDate: null, endDate: null },
    onClose: () => {},
    onReset: () => {},
    onDatesChange: () => {},
  };

  isOpened = () => this.props.openedOption === 'checkIn' || this.props.openedOption === 'checkOut';

  handleClickOutside = () => {
    if (this.isOpened()) this.props.onClose();
  };

  render() {
    const checkInValue = this.props.dates.startDate
      ? this.props.dates.startDate.format('MM/DD/YYYY')
      : '';
    const checkOutValue = this.props.dates.endDate
      ? this.props.dates.endDate.format('MM/DD/YYYY')
      : '';

    return (
      <Wrap>
        <DatesLabel>
          Check in
          <CheckInInput
            placeholder="mm/dd/yyyy"
            name="checkIn"
            value={checkInValue}
            readOnly
            selectedInput={this.props.openedOption}
            onFocus={() => this.props.onFocusInput('checkIn')}
          />
        </DatesLabel>
        <DatesLabel>
          Check out
          <CheckOutInput
            placeholder="mm/dd/yyyy"
            name="checkOut"
            value={checkOutValue}
            readOnly
            selectedInput={this.props.openedOption}
            onFocus={() => this.props.onFocusInput('checkOut')}
          />
        </DatesLabel>

        {this.isOpened() && (
          <Dropdown rightArrow={this.props.openedOption === 'checkOut'}>
            <DateRangePicker
              numberOfMonths={1}
              startDate={this.props.dates.startDate}
              endDate={this.props.dates.endDate}
              focusedInput={this.props.openedOption === 'checkIn' ? 'startDate' : 'endDate'}
              onDatesChange={this.props.onDatesChange}
            />

            <Tip>
              Minimum stay varies<br />
              Updated 1 day ago
            </Tip>

            <BottomWrap>
              <ClearButton onClick={this.props.onReset}>Clear dates</ClearButton>
            </BottomWrap>
          </Dropdown>
        )}
      </Wrap>
    );
  }
}

export default onClickOutside(DateDropdown);
