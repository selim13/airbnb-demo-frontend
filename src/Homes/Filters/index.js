import React from "react";
import bp from "../../breakpoints";
import MediaQuery from "react-responsive";
import Container from "../../UI/Container";
import { FixedPlaceholder, Bar, BarRow } from "./styled";
import Filter from "./Filter";
import Guests from "./Guests";
import Dates from "./Dates";

export default class extends React.Component {
  state = {
    openedFilter: null,
    dates: { startDate: null, endDate: null },
    guests: { adults: 1, children: 0, infants: 0 }
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
                adults={this.state.guests.adults}
                children={this.state.guests.children}
                infants={this.state.guests.infants}
                onClick={() => this.toggle("guests")}
                onFilterChange={values => this.changeFilter("guests", values)}
                onReset={this.resetGuests}
                onClose={this.close}
              />

              <MediaQuery minDeviceWidth={bp.md}>
                <Filter buttonText="Room type" />
                <Filter buttonText="Price" />
                <Filter buttonText="Instant book" />
              </MediaQuery>

              <Filter buttonText="More filters" />
            </BarRow>
          </Container>
        </Bar>
      </FixedPlaceholder>
    );
  }
}
