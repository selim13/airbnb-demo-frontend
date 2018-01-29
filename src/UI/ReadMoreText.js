import React from 'react';
import styled from 'styled-components';
import Truncate from 'react-truncate';

const ReadMore = styled.button`
  display: inline-block;
  padding: 0;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: 300;
  white-space: nowrap;
  color: #0f7276;
  background: none;
  user-select: none;
  cursor: pointer;

  &:hover,
  &:focus {
    border-bottom: 1px dashed #0f7276;
  }
`;

export default class ReadMoreText extends React.Component {
  static defaultProps = {
    lines: 3,
  };

  state = { isOpen: false };

  handleOpen = () => this.setState({ isOpen: true });

  render() {
    return (
      <Truncate
        trimWhitespace
        lines={!this.state.isOpen && this.props.lines}
        ellipsis={
          <span>
            ... <ReadMore onClick={this.handleOpen}>Read more</ReadMore>
          </span>
        }
      >
        {this.props.children}
      </Truncate>
    );
  }
}
