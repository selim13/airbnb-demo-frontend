import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import bp from '../../breakpoints';

const Wrap = styled.div`
  margin-bottom: 24px;
`;

const MapBox = styled.aside`
  width: 100%;
  height: 192px;

  @media (min-width: ${bp.sm}px) {
    height: 474px;
  }

  @media (min-width: ${bp.lg}px) {
    height: 612px;
  }
`;

const Tip = styled.p`
  margin: 16px 0;
  color: #383838;
  font-size: 18px;
  font-weight: 300;
`;

const markerSize = 77;
const MapAreaMarker = styled.div`
  position: 'absolute';
  width: ${markerSize}px;
  height: ${markerSize}px;
  left: ${markerSize / 2}px;
  top: ${markerSize / 2}px;

  border: 1px solid #008489;
  border-radius: 50px;
  background: rgba(3, 178, 185, 0.2);
`;

export default function () {
  return (
    <Wrap>
      <MapBox>
        <GoogleMapReact
          defaultCenter={{ lat: 4.49, lng: -75.7 }}
          defaultZoom={14}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        >
          <MapAreaMarker lat={4.49} lng={-75.7} />
        </GoogleMapReact>
      </MapBox>

      <Tip>Exact location information is provided after a booking is confirmed.</Tip>
    </Wrap>
  );
}
