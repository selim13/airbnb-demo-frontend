import React from 'react';
import styled from 'styled-components';

import bp from '../../breakpoints';

import { ToSm, Sm } from '../../UI/mediaQueries';
import Icon from '../../UI/Icon';
import SaveIcon from '../../UI/SaveIcon';

import leadImg from './lead.jpg';

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
  padding: 8px 0 16px;

  @media (min-width: ${bp.sm}px) {
    padding: 16px 8px 24px;
  }
`;

const TopRow = styled.div`
  align-self: flex-end;
`;

const MobileButton = styled.button`
  margin-left: 8px;
  padding: 8px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
  color: #ffffff;
`;

const MobileSaveIcon = SaveIcon.extend`
  fill: ${props => (props.isSaved ? '#ff5a5f' : 'transparent')};
  color: #ffffff;
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

const TopButton = Button.extend`
  margin-left: 1rem;
`;

const ButtonIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  fill: #767676;
`;

const ButtonSaveIcon = SaveIcon.extend`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

const BottomRow = styled.div`
  align-self: flex-end;
  margin-right: 4px;

  @media (min-width: ${bp.sm}px) {
    align-self: flex-start;
    margin-right: 0;
  }
`;

export default function Header({ isSaved = false, onSave = () => {} }) {
  return (
    <Wrap>
      <Container>
        <TopRow>
          <ToSm>
            <MobileButton>
              <Icon icon="share" />
            </MobileButton>
            <MobileButton onClick={onSave}>
              <MobileSaveIcon isSaved={isSaved} />
            </MobileButton>
          </ToSm>
          <Sm>
            <TopButton>
              <ButtonIcon icon="share" /> Share
            </TopButton>
            <TopButton onClick={onSave}>
              <ButtonSaveIcon isSaved={isSaved} />
              {isSaved ? 'Saved' : 'Save'}
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
