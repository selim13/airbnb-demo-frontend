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

export default function({ rating, count, label, status }) {
  const starsList = [1, 2, 3, 4, 5].map(i => {
    if (i <= rating)
      return <Star src={starFilledSvg} key={i} width="12" height="13" alt="" />;
    else
      return <Star src={starEmptySvg} key={i} width="12" height="13" alt="" />;
  });

  return (
    <div>
      {starsList}
      <Text>
        {count > 0 && count}
        {count > 0 && label && " " + label}
        {status && " · " + status}
      </Text>
    </div>
  );
}
