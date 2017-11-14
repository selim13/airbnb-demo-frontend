import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  flex: 0 0 auto;
  display: block;
  width: 91px;
  margin: 0 8px;
  font-size: 15px;
  color: #383838;
  text-decoration: none;

  @media (min-width: 670px) {
    width: 147px;
  }
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;
const Heading = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: bold;

  @media (min-width: 670px) {
    font-size: 15px;
  }
`;

export default function({ code, name, image }) {
  return (
    <Card to={"/destination/" + code}>
      <Image src={image} width="147" height="220" alt="" />
      <Heading>{name}</Heading>
    </Card>
  );
}
