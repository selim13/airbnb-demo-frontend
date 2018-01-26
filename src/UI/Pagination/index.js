import React from 'react';
import styled from 'styled-components';

// import leftArrowSvg from "./leftArrow.svg";
import rightArrowSvg from './rightArrow.svg';

const Pagination = styled.div`
  text-align: center;
`;
const List = styled.div`
  display: inline-flex;
  margin-bottom: 16px;
`;
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  margin: 0 8px;
  border: 1px solid transparent;
  border-radius: 100%;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
`;
const PageNumber = Button.extend`
  border-color: ${props => (props.isActive ? '#008489' : 'transparent')};
  color: ${props => (props.isActive ? '#ffffff' : '#0f7276')};
  background-color: ${props => (props.isActive ? '#008489' : 'transparent')};

  &:hover {
    text-decoration: underline;
  }
`;
const PrevNext = Button.extend`
  border-color: #008489;
`;
const Ellipsis = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  margin: 0;
  font-size: 16px;
  text-align: center;
  user-select: none;
`;
const Footer = styled.p`
  margin: 0;
  font-size: 16px;
`;

export default function ({ showRange = true }) {
  return (
    <Pagination>
      <List>
        {/* <PrevNext href="#" title="Previous page">
          <img src={leftArrowSvg} alt="" />
        </PrevNext> */}
        <PageNumber href="#">1</PageNumber>
        <PageNumber href="#" isActive>
          2
        </PageNumber>
        <PageNumber href="#">3</PageNumber>
        <Ellipsis>...</Ellipsis>
        <PageNumber href="#">4</PageNumber>
        <PrevNext href="#" title="Next page">
          <img src={rightArrowSvg} alt="" />
        </PrevNext>
      </List>
      {showRange && <Footer>1 &ndash; 18 of 300+ Rentals</Footer>}
    </Pagination>
  );
}
