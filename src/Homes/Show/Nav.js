import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

import bp from "../../breakpoints";
import DotSeparator from "../../UI/DotSeparator";

const Wrap = styled.nav`
  padding: 15px 0;
  height: 50px;
  font-size: 12px;
  color: #008489;
  background: #ffffff;

  @media (min-width: ${bp.sm}px) {
    font-size: 14px;
  }
`;

const Link = styled(ScrollLink)`
  display: inline-block;
  border-bottom: 1px solid transparent;
  color: ${props => (props.selected ? "#383838" : "#008489")};
  text-decoration: none;
  font-weight: ${props => (props.selected ? "bold" : "400")};

  &:hover {
    border-color: ${props => (props.selected ? "#383838" : "#008489")};
  }
`;

// TODO: this can be refactored as a generic component
export default class Nav extends React.Component {
  state = { selectedLink: "overview" };

  static defaultProps = {
    scrollSmooth: true,
    scrollDuration: 100
  };

  handleSetActive = link => this.setState({ selectedLink: link });

  render() {
    return (
      <Wrap>
        <Link
          to="overview"
          selected={this.state.selectedLink === "overview"}
          offset={this.props.scrollOffset}
          spy={true}
          smooth={this.props.scrollSmooth}
          duration={this.props.scrollDuration}
          onSetActive={() => this.handleSetActive("overview")}
        >
          Overview
        </Link>
        <DotSeparator />
        <Link
          to="reviews"
          selected={this.state.selectedLink === "reviews"}
          offset={this.props.scrollOffset}
          spy={true}
          smooth={this.props.scrollSmooth}
          duration={this.props.scrollDuration}
          onSetActive={() => this.handleSetActive("reviews")}
        >
          Reviews
        </Link>
        <DotSeparator />
        <Link
          to="host"
          selected={this.state.selectedLink === "host"}
          offset={this.props.scrollOffset}
          spy={true}
          smooth={this.props.scrollSmooth}
          duration={this.props.scrollDuration}
          onSetActive={() => this.handleSetActive("host")}
        >
          The host
        </Link>
        <DotSeparator />
        <Link
          to="location"
          selected={this.state.selectedLink === "location"}
          offset={this.props.scrollOffset}
          spy={true}
          smooth={this.props.scrollSmooth}
          duration={this.props.scrollDuration}
          onSetActive={() => this.handleSetActive("location")}
        >
          Location
        </Link>
      </Wrap>
    );
  }
}
