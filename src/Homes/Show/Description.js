import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';
import { Paragraph, TextSubheading } from './styled';
import ReadMore from '../../UI/ReadMore';

const Wrap = styled.div`
  margin-top: 0;
  margin-bottom: 24px;
  color: #383838;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    font-size: 18px;
  }

  @media (min-width: ${bp.lg}px) {
    margin-top: 15px;
  }
`;

export default function Description() {
  return (
    <Wrap>
      <Paragraph>
        Located in the coffee region, in the Andean mountains of Colombia, South America, a charming
        cabana made from bamboo, with a great view and a &quot;sendero&quot; or pathway through the
        bamboo forest which criss-crosses our 5 acre organic farm, leading down to a stream. A place
        to relax and commune with nature.
      </Paragraph>
      <ReadMore openLabel="Read more about the space">
        <TextSubheading>The space</TextSubheading>
        <Paragraph>
          Surrounded by beautiful rainforest plants, strategically placed for privacy, with an
          outdoor shower in a garden. Commune with nature, listen to crickets and night and birds in
          the morning.<br />
          Situated on a small organic farm. We grow tropical fruits and trees, flowers, with aloe
          vera as our main crop. There is an enchanting pathway through our bamboo forest, leading
          down to a mountain stream and a small waterfall. Near many coffee region tours and
          attractions, including our own organic farming workshops, visiting a nearby bee farm where
          our neighbor propagates bees in danger of extinction, local coffee tours, butterfly
          emporium, hang gliding, zip lining, white water rafting, horseback riding, hiking,
          visiting nearby historic towns and world heritage sites.
        </Paragraph>
        <TextSubheading>Interaction with guests</TextSubheading>
        <Paragraph>
          We offer breakfast daily, included in the room price, help to plan tours and make
          reservations, help to plan and facilitate transportation, other meals on site are offered,
          as well as airport or bus terminal pick-up. (20mil pesos) We will make sure you feel taken
          care of and have help with whatever needs you have.
        </Paragraph>
        <TextSubheading> Other things to note</TextSubheading>
        <Paragraph>
          Yudy is a good cook and in addition to a breakfast of your choice, she offers lunches or
          dinners for 20 mil pesos per person. The King size bed can be separated into 2 twins.
        </Paragraph>
      </ReadMore>
    </Wrap>
  );
}
