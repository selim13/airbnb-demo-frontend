import React from "react";
import bp from "../../breakpoints";
import MediaQuery from "react-responsive";
import Container from "../../UI/Container";
import { FixedPlaceholder, Bar, BarRow } from "./styled";
import Filter from "./Filter";
import Guests from "./Guests";
import Dates from "./Dates";

export default function() {
  return (
    <FixedPlaceholder>
      <Bar>
        <Container>
          <BarRow>
            <Dates />
            <Guests />

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
