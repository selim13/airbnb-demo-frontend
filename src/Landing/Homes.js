import React from 'react';
import times from 'lodash/times';

import apiGet from '../apiGet';
import bp from '../breakpoints';
import { Slider, Slide } from '../UI/Slider';
import Wrap from '../Homes/Card';

const HomeSlide = Slide.extend`
  max-width: 197px;
  @media (min-width: ${bp.sm}px) {
    max-width: 314px;
  }
`;

export default class Homes extends React.Component {
  static defaultProps = { displayNumber: 6 };

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

    const slides = homes.map(home => (
      <HomeSlide key={home.id}>
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
      </HomeSlide>
    ));

    return <Slider hasDesktopNavigation>{slides}</Slider>;
  }
}
