import React from "react";
import styled from "styled-components";

import bp from "../../breakpoints";

import { ToSm, Sm } from "../../UI/mediaQueries";
import Icon from "../../UI/Icon";

import leadImg from "./lead.png";

const Wrap = styled.div`
  position: relative;
  height: 290px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(${leadImg});

  @media (min-width: ${bp.sm}px) {
    height: 360px;
  }

  @media (min-width: ${bp.lg}px) {
    height: 440px;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: ${bp.lg}px;
  margin: 0 auto;
  padding: 16px 8px 24px;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1rem;

  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);

  color: #383838;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  background-color: #ffffff;

  cursor: pointer;
  user-select: none;

  &:active {
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  }
`;

const TopRow = styled.div`
  align-self: flex-end;
`;

const TopButton = Button.extend`
  margin-left: 1rem;
`;

const TopButtonIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  fill: #767676;
`;

const MobileButton = styled.button`
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
  color: #ffffff;
`;

const BottomRow = styled.div`
  align-self: flex-end;

  @media (min-width: ${bp.sm}px) {
    align-self: flex-start;
  }
`;

export default function() {
  return (
    <Wrap>
      <Container>
        <TopRow>
          <ToSm>
            <MobileButton>
              <Icon icon="share" />
            </MobileButton>
            <MobileButton>
              <Icon icon="heartOutline" stroke-width="2" />
            </MobileButton>
          </ToSm>
          <Sm>
            <TopButton>
              <TopButtonIcon icon="share" /> Share
            </TopButton>
            <TopButton>
              <TopButtonIcon icon="heartOutline" />Save
            </TopButton>
          </Sm>
        </TopRow>
        <BottomRow>
          <Button>View Photos</Button>
        </BottomRow>
      </Container>
    </Wrap>
  );
}
