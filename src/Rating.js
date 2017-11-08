import React from "react";
import styled from "styled-components";

const Text = styled.span`
  margin-left: 8px;
  font-size: 12px;
`;
const Star = styled.span`color: #008489;`;

export default function({ stars, number, label, dot }) {
  const starsList = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) starsList.push(<Star key={i}>★</Star>);
    else starsList.push(<Star key={i}>☆</Star>);
  }

  return (
    <div>
      {starsList}
      {number > 0 && (
        <Text>
          {number}
          {dot && <span> ·</span>}
          {label && " " + label}
        </Text>
      )}
    </div>
  );
}
