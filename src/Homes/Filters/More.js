import React from 'react';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

import bp from '../../breakpoints';
import { ToMd } from '../../UI/mediaQueries';
import Dropdown from './MoreDropdown';
import Toggler from '../../UI/Toggler';
import { ControlsGroup, Label } from './styled';
import RoomTypes from './RoomTypes';
import Price from './Price';
import Rooms from './Rooms';
import Options from './Options';

const Section = styled.div`
  margin-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e3e3e3;

  @media (min-width: ${bp.sm}px) {
    margin-top: 23px;
    padding-bottom: 23px;
  }
`;

// TODO: make this an actual heading?
const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 18px;

  @media (min-width: ${bp.sm}px) {
    font-size: 20px;
  }
`;

const RoomsWrap = styled.div`
  max-width: 376px;
`;

const MoreOptionsWrap = styled.div`
  max-width: 390px;
`;

const Caption = styled.small`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: ${bp.sm}px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  display: block;
  margin-top: 4px;

  color: #0f7276;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;

  @media (min-width: ${bp.sm}px) {
    font-size: 16px;
  }
`;

const amenities = [
  'Heating',
  'Kitchen',
  'TV',
  'Wireless Internet',
  'Washer',
  'Dryer',
  'Shampoo',
  'Iron',
  'Doorman',
];

const facilities = [
  'Elevator',
  'Free parking on premises',
  'Pool',
  'Wheelchair accessible',
  'Gym',
  'Hot tub',
];

function changedFiltersCount(values, initialValues, collapsed = false) {
  const filters = collapsed
    ? ['roomTypes', 'price', 'rooms', 'superhost', 'instantBook', 'amenities', 'facilities']
    : ['rooms', 'superhost', 'amenities', 'facilities'];

  return filters.reduce(
    (previousValue, filter) =>
      (isEqual(values[filter], initialValues[filter]) ? previousValue : previousValue + 1),
    0,
  );
}

function labelFormatter(values, initialValues, collapsed = false) {
  const filtersCount = changedFiltersCount(values, initialValues, collapsed);

  if (filtersCount > 0) return `More filters · ${filtersCount}`;

  return 'More filters';
}

export default function ({
  isOpen = false,
  priceRange,
  values,
  initialValues,
  onMoreFiltersChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {},
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={labelFormatter(values, initialValues)}
      collapsedButtonText={labelFormatter(values, initialValues, true)}
      heading={`All filters (${changedFiltersCount(values, initialValues, true)})`}
      hasMobileHeaderSeparator
      hasMobileFooter
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <ToMd>
        <Section>
          <Heading>Room type</Heading>
          <RoomTypes
            roomTypes={values.roomTypes}
            onFilterChange={newValues => onMoreFiltersChange('roomTypes', newValues)}
          />
        </Section>

        <Section>
          <Heading>Price range</Heading>
          <Price
            range={priceRange}
            values={values.price}
            onFilterChange={newValues => onMoreFiltersChange('price', newValues)}
          />
        </Section>
      </ToMd>

      <Section>
        <Heading>Rooms and beds</Heading>

        <RoomsWrap>
          <Rooms
            bedrooms={values.rooms.bedrooms}
            beds={values.rooms.beds}
            bathrooms={values.rooms.bathrooms}
            onFilterChange={newValues => onMoreFiltersChange('rooms', newValues)}
          />
        </RoomsWrap>
      </Section>

      <Section>
        <Heading>More options</Heading>

        <MoreOptionsWrap>
          <ToMd>
            <ControlsGroup>
              <div>
                <Label>Instant Book</Label>
                <Caption>Listings you can book without waiting for host approval.</Caption>
                <Link href="#">Learn more</Link>
              </div>
              <Toggler
                checked={values.instantBook}
                onChange={e => onMoreFiltersChange('instantBook', e.target.checked)}
              />
            </ControlsGroup>
          </ToMd>
          <ControlsGroup>
            <div>
              <Label>Superhost</Label>
              <Caption>Stay with recognized hosts.</Caption>
              <Link href="#">Learn more</Link>
            </div>
            <Toggler
              checked={values.superhost}
              onChange={e => onMoreFiltersChange('superhost', e.target.checked)}
            />
          </ControlsGroup>
        </MoreOptionsWrap>
      </Section>

      <Section>
        <Options
          heading="Amenities"
          options={amenities}
          selected={values.amenities}
          onFilterChange={newValues => onMoreFiltersChange('amenities', newValues)}
        />
      </Section>

      <Section>
        <Options
          heading="Facilities"
          options={facilities}
          selected={values.facilities}
          onFilterChange={newValues => onMoreFiltersChange('facilities', newValues)}
        />
      </Section>
    </Dropdown>
  );
}
