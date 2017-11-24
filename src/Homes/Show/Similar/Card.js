import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import bp from "../../../breakpoints";
import Reviews from "../../../UI/Reviews";

import LikeSvg from "./like.svg";

const Card = styled(Link)`
  font-size: 15px;
  color: #383838;
  text-decoration: none;

  @media (min-width: ${bp.sm}px) {
    font-size: 15px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
`;

const Heading = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
`;

const Price = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-weight: 300;
  font-size: 15px;
`;

const Properties = styled.p`
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => (props.hot ? "#8D1F13" : "#383838")};
`;

const NewBadge = styled.div`
  display: inline-block;
  padding: 4px 5px;
  border-radius: 2px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  background: #008489;
`;

export default function({
  id,
  name,
  image,
  price,
  roomType,
  bedsNumber,
  hot,
  reviews = {}
}) {
  return (
    <Card to={"/homes/" + id}>
      <ImageWrap>
        <Image
          src={image}
          width="738"
          height="494"
          alt=""
          width="32"
          height="28"
        />
        <LikeButton title="Like">
          <img src={LikeSvg} alt="" />
        </LikeButton>
      </ImageWrap>
      <Properties hot={hot}>
        {roomType} · {bedsNumber} beds
      </Properties>
      <Heading>{name}</Heading>
      <Price>${price} per night</Price>
      {reviews && reviews.count > 0 ? (
        <Reviews
          rating={reviews.rating}
          count={reviews.count}
          status={reviews.status}
        />
      ) : (
        <NewBadge>New</NewBadge>
      )}
    </Card>
  );
}
