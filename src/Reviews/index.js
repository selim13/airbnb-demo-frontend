import React from "react";
import styled from "styled-components";

import starFilledSvg from "./starFilled.svg";
import starEmptySvg from "./starEmpty.svg";

const Star = styled.img`
  margin-right: 4px;
  vertical-align: middle;
`;
const Text = styled.span`
  margin-left: 4px;
  font-size: 12px;
`;

export default function({ rating, number, hasLabel, status }) {
  const starsList = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating)
      starsList.push(
        <Star src={starFilledSvg} key={i} width="12" height="13" alt="" />
      );
    else
      starsList.push(
        <Star src={starEmptySvg} key={i} width="12" height="13" alt="" />
      );
  }

  return (
    <div>
      {starsList}
      <Text>
        {number > 0 && number}
        {number > 0 && hasLabel && " reviews"}
        {status && " · " + status}
      </Text>
    </div>
  );
}
