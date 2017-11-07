import React from "react";
import styled from "styled-components";

import { bp } from "./vars";

export default styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
  font-family: CircularAir;

  font-size: 24px;

  @media (min-width: ${bp.tablet}) {
    font-size: 32px;
  }
`;
