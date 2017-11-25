import React from "react";
import styled from "styled-components";
import isEqual from "lodash/isEqual";

import bp from "../../breakpoints";
import { ToMd } from "../../UI/mediaQueries";
import Dropdown from "./MoreDropdown";
import Toggler from "../../UI/Toggler";
import { ControlsGroup, Label, Caption } from "./styled";
import RoomTypes from "./RoomTypes";
import Price from "./Price";
import Rooms from "./Rooms";
import Options from "./Options";

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

const amenities = [
  "Heating",
  "Kitchen",
  "TV",
  "Wireless Internet",
  "Washer",
  "Dryer",
  "Shampoo",
  "Iron",
  "Doorman"
];

const facilities = [
  "Elevator",
  "Free parking on premises",
  "Pool",
  "Wheelchair accessible",
  "Gym",
  "Hot tub"
];

function changedFiltersCount(values, initialValues) {
  return [
    "roomTypes",
    "price",
    "rooms",
    "superhost",
    "instantBook",
    "amenities",
    "facilities"
  ].reduce(
    (previousValue, filter) =>
      isEqual(values[filter], initialValues[filter])
        ? previousValue
        : previousValue + 1,
    0
  );
}

function labelFormatter(values, initialValues) {
  const filtersCount = changedFiltersCount(values, initialValues);

  if (filtersCount > 0) return `More filters · ${filtersCount}`;

  return "More filters";
}

export default function({
  isOpen = false,
  priceRange,
  values,
  initialValues,
  onMoreFiltersChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  return (
    <Dropdown
      isOpen={isOpen}
      buttonText={labelFormatter(values, initialValues)}
      heading={`All filters (${changedFiltersCount(values, initialValues)})`}
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
            onFilterChange={values => onMoreFiltersChange("roomTypes", values)}
          />
        </Section>

        <Section>
          <Heading>Price range</Heading>
          <Price
            range={priceRange}
            values={values.price}
            onFilterChange={values => onMoreFiltersChange("price", values)}
          />
        </Section>
      </ToMd>

      <Section>
        <Heading>Rooms and beds</Heading>
        <Rooms
          bedrooms={values.rooms.bedrooms}
          beds={values.rooms.beds}
          bathrooms={values.rooms.bathrooms}
          onFilterChange={values => onMoreFiltersChange("rooms", values)}
        />
      </Section>

      <Section>
        <Heading>More options</Heading>

        <ToMd>
          <ControlsGroup>
            <div>
              <Label>Instant Book</Label>
              <Caption>
                Listings you can book without waiting for host approval.
              </Caption>
            </div>
            <Toggler
              checked={values.instantBook}
              onChange={e =>
                onMoreFiltersChange("instantBook", e.target.checked)
              }
            />
          </ControlsGroup>
        </ToMd>

        <ControlsGroup>
          <div>
            <Label>Superhost</Label>
            <Caption>Stay with recognized hosts.</Caption>
          </div>
          <Toggler
            checked={values.superhost}
            onChange={e => onMoreFiltersChange("superhost", e.target.checked)}
          />
        </ControlsGroup>
      </Section>

      <Section>
        <Options
          heading="Amenities"
          options={amenities}
          selected={values.amenities}
          onFilterChange={values => onMoreFiltersChange("amenities", values)}
        />
      </Section>

      <Section>
        <Options
          heading="Facilities"
          options={facilities}
          selected={values.facilities}
          onFilterChange={values => onMoreFiltersChange("facilities", values)}
        />
      </Section>
    </Dropdown>
  );
}
