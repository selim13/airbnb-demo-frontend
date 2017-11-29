import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default class extends React.Component {
  node = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.node);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.node);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.node);
  }
}
