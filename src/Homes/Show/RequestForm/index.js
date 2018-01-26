import React, { Fragment } from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

import { ToLg } from '../../../UI/mediaQueries';
import Reviews from '../../../UI/Reviews';
import Icon from '../../../UI/Icon';
import SaveIcon from '../../../UI/SaveIcon';
import ManyViews from '../ManyViews';
import GuestsDropdown from './GuestsDropdown';
import DateDropdown from './DateDropdown';

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

const IconButtonWrap = styled.div`
  margin-right: -8px;
`;

const IconButton = styled.button`
  padding: 8px;
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
  color: #383838;
  font-size: 12px;
  text-align: center;
`;

const ManyViewsTransition = styled.div`
  overflow: hidden;
  max-height: ${props => (props.isVisible ? '300px' : '0')};
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transition: max-height 0.8s, opacity 0.8s linear 0.2s;
`;

const ManyViewsWrap = styled.div`
  padding-top: 16px;
  margin-top: 24px;
  border-top: 1px solid rgba(118, 118, 118, 0.2);
`;

export default class RequestForm extends React.Component {
  static defaultProps = {
    isModal: false,
    isSaved: false,
    onSave: () => {},
  };

  state = {
    openedOption: null,
    dates: { startDate: null, endDate: null },
    guests: { adults: 1, children: 0, infants: 0 },
  };

  handleDropdownToggle = (option) => {
    this.setState(prevState =>
      (prevState.openedOption === option ? { openedOption: null } : { openedOption: option }));
  };

  handleDropdownClose = () => this.setState({ openedOption: null });

  handleDatesReset = () =>
    this.setState({
      openedOption: false,
      dates: { startDate: null, endDate: null },
    });

  handleDatesChange = (dates) => {
    this.setState(() => {
      if (!dates.endDate) return { dates, openedOption: 'checkOut' };
      if (!dates.startDate) return { dates, openedOption: 'checkIn' };
      if (dates.startDate && dates.startDate) {
        return { dates, openedOption: null };
      }
      return null;
    });
  };

  handleChangeGuests = guests => this.setState({ guests });

  render() {
    return (
      <Fragment>
        <TopWrap>
          <div>
            <Price>
              $41 <Caption>per night</Caption>
            </Price>
            <Reviews rating={5} count={111} />
          </div>
          <ToLg>
            <IconButtonWrap>
              <IconButton>
                <Icon icon="share" />
              </IconButton>
              <IconButton onClick={this.props.onSave}>
                <SaveIcon isSaved={this.props.isSaved} />
              </IconButton>
            </IconButtonWrap>
          </ToLg>
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
          isOpen={this.state.openedOption === 'guests'}
          maxGuests={3}
          maxInfants={2}
          values={this.state.guests}
          onClick={() => this.handleDropdownToggle('guests')}
          onValuesChange={newValues => this.handleChangeGuests(newValues)}
          onCancel={this.handleDropdownClose}
        />

        <RequestButton>Request a book</RequestButton>

        <ChargeTip>You won’t be charged yet</ChargeTip>

        <VisibilitySensor
          active={!this.props.isModal}
          offset={{
            bottom: 200,
            top: -9999, // skips visibility check, when moved above the screen
          }}
          partialVisibility
        >
          {({ isVisible }) => (
            <ManyViewsTransition isVisible={this.props.isModal || isVisible}>
              <ManyViewsWrap>
                <ManyViews mobile />
              </ManyViewsWrap>
            </ManyViewsTransition>
          )}
        </VisibilitySensor>
      </Fragment>
    );
  }
}
