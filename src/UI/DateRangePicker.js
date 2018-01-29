import React from 'react';
import moment from 'moment';

import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

/**
 * A wrapper component from the react-dates doc
 */
export default class extends React.Component {
  static defaultProps = {
    // day presentation and interaction related props
    renderDay: null,
    minimumNights: 1,
    isDayBlocked: () => false,
    isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
    isDayHighlighted: () => false,
    enableOutsideDays: false,
    focusedInput: null,

    // calendar presentation and interaction related props
    orientation: 'horizontal',
    withPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 2,
    onOutsideClick() {},
    keepOpenOnDateSelect: false,
    renderCalendarInfo: null,
    isRTL: false,
    hideKeyboardShortcutsPanel: true,

    // navigation related props
    navPrev: null,
    navNext: null,
    onPrevMonthClick() {},
    onNextMonthClick() {},

    // internationalization
    monthFormat: 'MMMM YYYY',
  };

  state = { focusedInput: 'startDate' };

  componentWillReceiveProps({ focusedInput }) {
    this.setState(prevState =>
      (focusedInput && prevState.focusedInput !== focusedInput ? { focusedInput } : null));
  }

  handleFocusChange = (focusedInput) => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? 'startDate' : focusedInput,
    });
  };

  render() {
    return (
      <DayPickerRangeController
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={this.props.onDatesChange}
        focusedInput={this.state.focusedInput}
        onFocusChange={this.handleFocusChange}
        {...this.props}
      />
    );
  }
}
