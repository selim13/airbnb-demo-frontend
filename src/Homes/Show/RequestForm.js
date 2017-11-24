import React from "react";
import styled from "styled-components";

import Reviews from "../../UI/Reviews";
import ManyViews from "./ManyViews";

import downArrowSvg from "./downArrow.svg";

const Form = styled.div`
  padding: 15px 24px 24px;
  border: 1px solid rgba(118, 118, 118, 0.2);
  background: #ffffff;
`;

const Price = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: #383838;
  font-size: 24px;
  font-weight: bold;
`;

const Caption = styled.small`
  color: #636363;
  font-size: 12px;
`;

const RatingWrap = styled.div`
  margin-bottom: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const ControlsGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 0.75rem;
  border: 1px solid rgba(118, 118, 118, 0.2);

  color: #636363;
  font-size: 14px;
  font-family: inherit;

  background: #ffffff;

  &::placeholder {
    color: #636363;
  }
`;
const CheckInInput = Input.extend`
  border-right: none;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  border: none;
  font-family: inherit;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
`;

const GuestsButton = Button.extend`
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 0.75rem 50px 0.75rem 0.75rem;
  border: 1px solid rgba(118, 118, 118, 0.2);
  color: #636363;
  font-size: 14px;
  text-align: left;
  background: #ffffff url(${downArrowSvg}) right 20px center no-repeat;
`;

const RequestButton = Button.extend`
  padding: 0.75rem 1rem;
  margin-bottom: 16px;
  border-radius: 4px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  background: #ff5a5f;

  &:hover,
  &:focus {
    background: #f53d43;
  }

  &:active {
    background: #ed262c;
  }
`;

const Tip = styled.p`
  margin-bottom: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  -: #383838;
  font-size: 12px;
  text-align: center;
`;

export default function(props) {
  return (
    <Form {...props}>
      <Price>
        $41 <Caption>per night</Caption>
      </Price>
      <RatingWrap>
        <Reviews rating={5} count={111} />
      </RatingWrap>
      <ControlsGroup>
        <Label>
          Check in
          <CheckInInput placeholder="mm/dd/yyyy" name="checkin" />
        </Label>
        <Label>
          Check out
          <Input placeholder="mm/dd/yyyy" name="checkout" />
        </Label>
      </ControlsGroup>

      <Label>
        Guests
        <GuestsButton>1 guest</GuestsButton>
      </Label>

      <RequestButton>Request a book</RequestButton>

      <Tip>You won’t be charged yet</Tip>

      <ManyViews mobile />
    </Form>
  );
}
