import React, { Fragment } from 'react';

import SeeAllButton from './SeeAllButton';

export default class ReadMore extends React.Component {
  static defaultProps = {
    openLabel: 'Read more',
    closeLabel: 'Read less',
    isClosable: false,
  };

  state = { isOpen: false };

  handleToggle = () =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));

  render() {
    const displayButton = this.props.isClosable || !this.state.isOpen;
    const buttonLabel = this.state.isOpen ? this.props.closeLabel : this.props.openLabel;

    return (
      <Fragment>
        {this.state.isOpen && this.props.children}

        {displayButton && (
          <SeeAllButton
            isOpen={this.state.isOpen}
            label={buttonLabel}
            onClick={this.handleToggle}
          />
        )}
      </Fragment>
    );
  }
}
