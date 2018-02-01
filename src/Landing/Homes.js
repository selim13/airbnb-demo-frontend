import React from 'react';

import apiGet from '../apiGet';
import bp from '../breakpoints';
import { Slider, Slide } from '../UI/Slider';
import Card from '../Homes/Card';

const HomeSlide = Slide.extend`
  max-width: 197px;
  @media (min-width: ${bp.sm}px) {
    max-width: 314px;
  }
`;

export default class Homes extends React.Component {
  state = { homes: [] };

  componentDidMount() {
    apiGet('/homes', { limit: 6 })
      .then((data) => {
        this.setState({ homes: data.items });
      })
      .catch(err => console.error(err));
  }

  render() {
    const homesList = this.state.homes.map(home => (
      <HomeSlide key={home.id}>
        <Card
          id={home.id}
          name={home.name}
          image={home.images[0].picture}
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

    return <Slider hasDesktopNavigation>{homesList}</Slider>;
  }
}
