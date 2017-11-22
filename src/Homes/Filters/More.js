import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";
import Dropdown from "./MoreDropdown";
import Toggler from "../../UI/Toggler";
import { ControlsGroup, Label, Caption } from "./styled";
import RoomTypes from "./RoomTypes";
import Price from "./Price";
import Rooms from "./Rooms";
import Options from "./Options";

const Body = styled.div`
  padding-top: 15px;

  @media (min-width: ${bp.sm}px) {
    padding-top: 20px;
  }
`;

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

export default function({
  isOpen = false,
  priceRange,
  values,
  onMoreFiltersChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  return (
    <Dropdown
      isOpen={true}
      buttonText="More filters"
      heading="All filters (0)"
      hasMobileHeaderSeparator
      hasMobileFooter
      onClick={onClick}
      onClose={onClose}
      onReset={onReset}
    >
      <Body>
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
      </Body>
    </Dropdown>
  );
}
