import React from "react";

import { Md } from "../../UI/mediaQueries";
import Container from "../../UI/Container";
import { FixedPlaceholder, Bar, BarRow } from "./styled";
import Dropdown from "../../UI/Dropdown";
import Guests from "./Guests";
import Dates from "./Dates";
import RoomTypes from "./RoomTypesDropdown";
import Price from "./PriceDropdown";
import More from "./More";

export default class extends React.Component {
  state = {
    openedFilter: null,
    dates: { startDate: null, endDate: null },
    guests: { adults: 1, children: 0, infants: 0 },
    roomTypes: { entire: false, private: false, shared: false },
    price: { min: 0, max: 1000 },
    instantBook: false,
    rooms: { bedrooms: 0, beds: 0, bathrooms: 0 },
    superhost: false
  };

  toggle = filter => {
    this.setState(
      prevState =>
        prevState.openedFilter === filter
          ? { openedFilter: null }
          : { openedFilter: filter }
    );
  };

  open = filter => this.setState({ openedFilter: filter });

  close = () => this.setState({ openedFilter: null });

  changeFilter = (filter, newValues) => {
    this.setState(prevState => {
      return {
        [filter]: { ...prevState[filter], ...newValues }
      };
    });
  };

  resetDates = () =>
    this.setState({ dates: { startDate: null, endDate: null } });

  resetGuests = () =>
    this.setState({ guests: { adults: 1, children: 0, infants: 0 } });

  render() {
    return (
      <FixedPlaceholder>
        <Bar>
          <Container>
            <BarRow>
              <Dates
                isOpen={this.state.openedFilter === "dates"}
                startDate={this.state.dates.startDate}
                endDate={this.state.dates.endDate}
                onClick={() => this.toggle("dates")}
                onFilterChange={values => this.changeFilter("dates", values)}
                onReset={this.resetDates}
                onClose={this.close}
              />
              <Guests
                isOpen={this.state.openedFilter === "guests"}
                maxGuests={10}
                maxInfants={5}
                adults={this.state.guests.adults}
                children={this.state.guests.children}
                infants={this.state.guests.infants}
                onClick={() => this.toggle("guests")}
                onFilterChange={values => this.changeFilter("guests", values)}
                onReset={this.resetGuests}
                onClose={this.close}
              />

              <Md>
                <RoomTypes
                  isOpen={this.state.openedFilter === "roomTypes"}
                  roomTypes={this.state.roomTypes}
                  onClick={() => this.toggle("roomTypes")}
                  onFilterChange={values =>
                    this.changeFilter("roomTypes", values)}
                  onClose={this.close}
                />

                <Price
                  isOpen={this.state.openedFilter === "price"}
                  range={{ min: 0, max: 1000 }}
                  values={this.state.price}
                  onClick={() => this.toggle("price")}
                  onFilterChange={values => this.changeFilter("price", values)}
                  onClose={this.close}
                />

                <Dropdown buttonText="Instant book" />
              </Md>

              <More
                isOpen={this.state.openedFilter === "more"}
                roomTypes={this.state.roomTypes}
                priceRange={{ min: 0, max: 1000 }}
                priceValues={this.state.price}
                onClick={() => this.toggle("more")}
                onClose={this.close}
              />
            </BarRow>
          </Container>
        </Bar>
      </FixedPlaceholder>
    );
  }
}
