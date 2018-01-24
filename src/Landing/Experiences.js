import React from 'react';

import bp from '../breakpoints';
import { Slider, Slide } from '../UI/Slider';
import Card from '../Experiences/Card';

import data from '../Experiences/staticData';

const ExperienceSlide = Slide.extend`
  max-width: 144px;
  @media (min-width: ${bp.sm}px) {
    max-width: 232px;
  }
`;

export default function () {
  const experiencesList = data.map(experience => (
    <ExperienceSlide key={experience.id}>
      <Card
        id={experience.id}
        name={experience.name}
        image={experience.image}
        price={experience.price}
        reviews={experience.reviews}
      />
    </ExperienceSlide>
  ));
  return <Slider hasDesktopNavigation>{experiencesList}</Slider>;
}
