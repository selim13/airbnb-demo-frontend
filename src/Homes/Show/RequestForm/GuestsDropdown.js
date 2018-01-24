import React from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';
import onClickOutside from 'react-onclickoutside';

import bp from '../../../breakpoints';
import GuestsSelector, { guestsLabelFormatter } from '../../GuestsSelector';

import downArrowSvg from './downArrow.svg';
import upArrowSvg from './upArrow.svg';

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  font-size: 12px;
`;

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  background: #ffffff;
`;

const SelectButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 0.75rem 50px 0.75rem 0.75rem;
  border: 1px solid rgba(118, 118, 118, 0.2);
  color: #636363;
  font-size: 14px;
  text-align: left;
  font-family: inherit;
  vertical-align: middle;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  background: ${props =>
    (props.isActive
      ? `#ffffff url(${upArrowSvg}) right 20px center no-repeat`
      : `#ffffff url(${downArrowSvg}) right 20px center no-repeat`)};

  ${props => props.isActive && 'border-bottom: 2px solid #008489;'};
`;

const Tip = styled.p`
  margin-top: 0;
  margin-bottom: 8px;

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

const CancelButton = styled.button`
  display: inline-block;
  padding: 0.5rem 0;
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

class GuestsDropdown extends React.Component {
  static defaultProps = {
    isOpen: false,
    onValuesChange: () => {},
    onClick: () => {},
    onCancel: () => {},
  };

  handleClickOutside = () => {
    if (this.props.isOpen) this.props.onCancel();
  };

  render() {
    return (
      <Wrap>
        Guests
        <SelectButton isActive={this.props.isOpen} onClick={this.props.onClick}>
          {guestsLabelFormatter(
            this.props.values.adults,
            this.props.values.children,
            this.props.values.infants,
            true,
          )}
        </SelectButton>
        {this.props.isOpen && (
          <Dropdown>
            <GuestsSelector
              maxGuests={this.props.maxGuests}
              maxInfants={this.props.maxInfants}
              values={this.props.values}
              onValuesChange={this.props.onValuesChange}
            />

            <Tip>
              {this.props.maxGuests} {pluralize('guest', this.props.maxGuests)} maximum. Infants
              don’t count toward the number of guests.
            </Tip>

            <BottomWrap>
              <CancelButton onClick={this.props.onCancel}>Cancel</CancelButton>
            </BottomWrap>
          </Dropdown>
        )}
      </Wrap>
    );
  }
}

export default onClickOutside(GuestsDropdown);
