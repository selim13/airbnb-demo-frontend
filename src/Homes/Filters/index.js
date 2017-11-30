import React from "react";

import { Md } from "../../UI/mediaQueries";
import Container from "../../UI/Container";

import { FixedPlaceholder, Bar, BarRow } from "./styled";
import Guests from "./Guests";
import Dates from "./Dates";
import RoomTypes from "./RoomTypesDropdown";
import Price from "./PriceDropdown";
import InstantBook from "./InstantBook";
import More from "./More";

export default class extends React.Component {
  initialValues = {
    openedFilter: null,
    dates: { startDate: null, endDate: null },
    guests: { adults: 1, children: 0, infants: 0 },
    roomTypes: { entire: false, private: false, shared: false },
    price: { min: 0, max: 1000 },
    instantBook: false,
    rooms: { bedrooms: 0, beds: 0, bathrooms: 0 },
    superhost: false,
    amenities: [],
    facilities: []
  };

  state = this.initialValues;

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
    this.setState({
      [filter]: newValues
    });
  };

  reset = filter => this.setState({ [filter]: this.initialValues[filter] });

  resetMore = () => {
    this.reset("roomTypes");
    this.reset("price");
    this.reset("instantBook");
    this.reset("rooms");
    this.reset("superhost");
    this.reset("amenities");
    this.reset("facilities");
  };

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
                onReset={() => this.reset("dates")}
                onClose={this.close}
              />
              <Guests
                isOpen={this.state.openedFilter === "guests"}
                maxGuests={10}
                maxInfants={5}
                values={this.state.guests}
                onClick={() => this.toggle("guests")}
                onFilterChange={values => this.changeFilter("guests", values)}
                onReset={() => this.reset("guests")}
                onClose={this.close}
              />

              <Md>
                <RoomTypes
                  isOpen={this.state.openedFilter === "roomTypes"}
                  roomTypes={this.state.roomTypes}
                  onClick={() => this.toggle("roomTypes")}
                  onFilterChange={values =>
                    this.changeFilter("roomTypes", values)
                  }
                  onReset={() => this.reset("roomTypes")}
                  onClose={this.close}
                />

                <Price
                  isOpen={this.state.openedFilter === "price"}
                  range={{ min: 0, max: 1000 }}
                  values={this.state.price}
                  onClick={() => this.toggle("price")}
                  onFilterChange={values => this.changeFilter("price", values)}
                  onReset={() => this.reset("price")}
                  onClose={this.close}
                />

                <InstantBook
                  isOpen={this.state.openedFilter === "instantBook"}
                  instantBook={this.state.instantBook}
                  onClick={() => this.toggle("instantBook")}
                  onFilterChange={values =>
                    this.changeFilter("instantBook", values)
                  }
                  onReset={() => this.reset("instantBook")}
                  onClose={this.close}
                />
              </Md>

              <More
                isOpen={this.state.openedFilter === "more"}
                roomTypes={this.state.roomTypes}
                priceRange={{ min: 0, max: 1000 }}
                values={this.state}
                initialValues={this.initialValues}
                onMoreFiltersChange={this.changeFilter}
                onClick={() => this.toggle("more")}
                onReset={this.resetMore}
                onClose={this.close}
              />
            </BarRow>
          </Container>
        </Bar>
      </FixedPlaceholder>
    );
  }
}
