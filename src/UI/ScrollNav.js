import React from 'react';

export default class Nav extends React.Component {
  static defaultProps = {
    defaultSelected: null,
    duration: 100,
    isDynamic: false,
    offset: 0,
    smooth: true,
  };

  state = { selectedLink: this.props.defaultSelected };

  isValidLink = element => element.props.spy && element.props.to;

  handleSetActive = link => this.setState({ selectedLink: link });

  render() {
    return React.Children.map(this.props.children, (element) => {
      if (this.isValidLink(element)) {
        return React.cloneElement(element, {
          smooth: element.props.smooth ? element.props.smooth : this.props.smooth,
          offset: element.props.offset ? element.props.offset : this.props.offset,
          isDynamic: element.props.isDynamic ? element.props.isDynamic : this.props.isDynamic,
          duration: element.props.duration ? element.props.duration : this.props.duration,
          selected: element.props.to === this.state.selectedLink,
          onSetActive: () => this.handleSetActive(element.props.to),
        });
      }

      return element;
    });
  }
}
