import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import formatPrice from '../formatPrice';

const PricePin = styled.div`
  position: absolute;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  background-color: #ffffff;
  color: #222222;
`;

export default function MapPrices({ homes = [] }) {
  const pins = homes.map(home => (
    <PricePin key={home.id} lat={home.lat} lng={home.lng}>
      {formatPrice(home.price, home.currency)}
    </PricePin>
  ));

  return (
    <GoogleMapReact
      defaultCenter={{ lat: 57.307, lng: 15.53 }}
      defaultZoom={3}
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
    >
      {pins}
    </GoogleMapReact>
  );
}
