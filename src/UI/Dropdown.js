import React from "react";
import styled from "styled-components";

import Button from "./Button";

const Wrap = styled.div`position: relative;`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.active };
  }

  static defaultProps = {
    active: false
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = e => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <Button isActive={this.state.isOpen} onClick={this.toggle}>
          {this.props.buttonText}
        </Button>
        {this.state.isOpen && this.props.children}
      </Wrap>
    );
  }
}
