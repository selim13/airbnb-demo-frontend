import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import times from 'lodash/times';

import apiGet from '../apiGet';
import bp from '../breakpoints';
import Container from '../UI/Container';
import MapPrices from './MapPrices';
import Wrap from './Card';
import Filters from './Filters';
import Pagination from '../UI/Pagination';
import Navbar from '../Navbar';
import Footer from '../Footer';
import VisuallyHidden from '../UI/VisuallyHidden';

import pinIconSvg from './pinIcon.svg';

const CardWrap = styled.div`
  margin-bottom: 24px;
  @media (min-width: ${bp.md}px) {
    margin-bottom: 40px;
  }
`;
const MapBox = styled.aside`
  position: fixed;
  top: 135px;
  bottom: 0;
  right: 0;
  z-index: 0;

  display: none;
  width: 33.33333%;
  padding-left: 8px;

  @media (min-width: ${bp.md}px) {
    display: block;
  }

  @media (min-width: ${bp.lg}px) {
    width: calc(50% - 165px);
  }
`;
const PaginationWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 40px;
  }

  @media (min-width: ${bp.md}px) {
    margin-top: 8px;
  }
`;
const Info = styled.p`
  margin-bottom: 65px;
  font-size: 16px;
  color: #636363;
  text-align: center;

  @media (min-width: ${bp.sm}px) {
    margin-bottom: 25px;
  }
`;
const ToggleMapButton = styled.button`
  position: fixed;
  right: 8px;
  bottom: 16px;
  height: 40px;
  width: 40px;
  margin-left: 8px;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  background: #ffffff url(${pinIconSvg}) center center no-repeat;
  user-select: none;
  cursor: pointer;

  @media (min-width: ${bp.md}px) {
    display: none;
  }
`;

export default class List extends React.Component {
  static defaultProps = { displayNumber: 12 };

  state = { homes: [] };

  componentDidMount() {
    apiGet('/homes', { limit: this.props.displayNumber })
      .then((data) => {
        this.setState({ homes: data.items });
      })
      .catch(err => console.error(err));
  }

  render() {
    const homes =
      this.state.homes.length > 0
        ? this.state.homes
        : times(this.props.displayNumber, index => ({ id: index })); // dummy for skeleton

    const cards = homes.map(home => (
      <Col xs={12} sm={6} key={home.id}>
        <CardWrap>
          <Wrap
            id={home.id}
            name={home.name}
            image={home.images && home.images[0].picture}
            price={home.price}
            currency={home.currency}
            roomType={home.kind}
            bedsNumber={home.bedsCount}
            rating={home.rating}
            reviewsCount={home.reviewsCount}
            isSuperhost={home.isSuperhost}
          />
        </CardWrap>
      </Col>
    ));

    return (
      <div>
        <Navbar searchPlaceholder="Anywhere" searchValue="Anywhere &middot; Homes" />

        <Filters />

        <main>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Row>{cards}</Row>
                <Row center="xs">
                  <Col xs={12}>
                    <PaginationWrap>
                      <Pagination />
                    </PaginationWrap>
                    <Info>
                      Enter dates to see full pricing. Additional fees apply. Taxes may be added.
                    </Info>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <MapBox>
            <MapPrices homes={this.state.homes} />
          </MapBox>

          <ToggleMapButton title="Show map" />
        </main>

        <VisuallyHidden>
          <Footer />
        </VisuallyHidden>
      </div>
    );
  }
}
