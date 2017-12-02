import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import includes from "lodash/includes";

import bp from "../../../breakpoints";
import SeeAllButton from "../../../UI/SeeAllButton";

import internetSvg from "./internet.svg";
import wifiSvg from "./wifi.svg";
import kidsFriendlySvg from "./kidsFriendly.svg";
import parkingSvg from "./parking.svg";

const Property = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 23px;
    font-size: 16px;
  }
`;

const Icon = styled.img`
  margin-right: 8px;

  @media (min-width: ${bp.sm}px) {
    margin-right: 12px;
  }
`;

const Del = styled.del`
  color: #767676;
`;

const amenities = [
  {
    key: "internet",
    title: "Internet",
    img: internetSvg
  },
  {
    key: "wifi",
    title: "Wireless Internet",
    img: wifiSvg
  },
  {
    key: "kidsFriendly",
    title: "Family/kid friendly",
    img: kidsFriendlySvg
  },
  {
    key: "parking",
    title: "Free parking on premises",
    img: parkingSvg
  },

  {
    key: "elevator",
    title: "Elevator",
    img: parkingSvg
  },
  {
    key: "pets",
    title: "Pets allowed",
    img: parkingSvg
  }
];

export default class Amenities extends React.Component {
  state = { isOpen: false };

  static defaultProps = {
    selected: [],
    summary: []
  };

  handleOpen = () => this.setState({ isOpen: true });

  renderAmenity = (amenity, selected) => (
    <Col xs={6} key={amenity.key}>
      <Property>
        {selected && <Icon src={amenity.img} />}
        {selected ? (
          amenity.title
        ) : (
          <Del aria-hidden="true">{amenity.title}</Del>
        )}
      </Property>
    </Col>
  );

  render() {
    const summaryAmenities = amenities.filter(amenity =>
      includes(this.props.summary, amenity.key)
    );

    const summaryList = summaryAmenities.map(amenity =>
      this.renderAmenity(amenity, includes(this.props.selected, amenity.key))
    );
    const detailList = amenities.map(amenity =>
      this.renderAmenity(amenity, includes(this.props.selected, amenity.key))
    );

    return (
      <div>
        <Row>{this.state.isOpen ? detailList : summaryList}</Row>

        {!this.state.isOpen && (
          <SeeAllButton label="Show all amenities" onClick={this.handleOpen} />
        )}
      </div>
    );
  }
}
