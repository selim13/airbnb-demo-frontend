import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import includes from 'lodash/includes';

import bp from '../../../breakpoints';
import SeeAllButton from '../../../UI/SeeAllButton';
import amenities from './amenities';
import familyAmenities from './familyAmenities';

const FamilyAmenities = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 18px;
  font-weight: 400;
`;

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

export default class Amenities extends React.Component {
  static defaultProps = {
    selected: [],
    summary: [],
  };

  state = { isOpen: false };

  handleOpen = () => this.setState({ isOpen: true });

  renderAmenity = (amenity, selected) => (
    <Col xs={6} key={amenity.key}>
      <Property>
        {selected && amenity.img && <Icon src={amenity.img} />}
        {selected ? amenity.title : <Del aria-hidden="true">{amenity.title}</Del>}
      </Property>
    </Col>
  );

  render() {
    const summaryAmenities = amenities.filter(amenity => includes(this.props.summary, amenity.key));

    const summaryList = summaryAmenities.map(amenity =>
      this.renderAmenity(amenity, includes(this.props.selected, amenity.key)));

    const detailList = amenities.map(amenity =>
      this.renderAmenity(amenity, includes(this.props.selected, amenity.key)));
    const familyList = familyAmenities.map(amenity =>
      this.renderAmenity(amenity, includes(this.props.selected, amenity.key)));

    const detail = (
      <Fragment>
        <Row>{detailList}</Row>
        <FamilyAmenities>Family amenities</FamilyAmenities>
        <Row>{familyList}</Row>
      </Fragment>
    );

    return (
      <Fragment>
        {this.state.isOpen ? detail : <Row>{summaryList}</Row>}

        {!this.state.isOpen && (
          <SeeAllButton label="Show all amenities" onClick={this.handleOpen} />
        )}
      </Fragment>
    );
  }
}
