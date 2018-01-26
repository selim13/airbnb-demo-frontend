import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

import bp from '../../breakpoints';
import { Sm } from '../../UI/mediaQueries';
import ScrollNav from '../../UI/ScrollNav';
import DotSeparator from '../../UI/DotSeparator';
import Icon from '../../UI/Icon';
import SaveIcon from '../../UI/SaveIcon';

const Wrap = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0;
  height: 50px;
  font-size: 12px;
  color: #0f7276;

  @media (min-width: ${bp.sm}px) {
    font-size: 14px;
  }
`;

const Link = styled(ScrollLink)`
  display: inline-block;
  border-bottom: 1px solid transparent;
  color: ${props => (props.selected ? '#383838' : '#008489')};
  text-decoration: none;
  font-weight: ${props => (props.selected ? 'bold' : '400')};
  cursor: pointer;

  &:hover {
    border-color: ${props => (props.selected ? '#383838' : '#008489')};
  }
`;

const Buttons = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border: none;
  color: #383838;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background-color: #ffffff;
  cursor: pointer;
  user-select: none;
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

export default function Nav({ isSticky = false, isSaved = false, onSave = () => {} }) {
  return (
    <Wrap>
      <ScrollNav defaultSelected="overview" smooth duration={200} offset={-150}>
        <Link to="overview" spy>
          Overview
        </Link>
        <DotSeparator />
        <Link to="reviews" spy>
          Reviews
        </Link>
        <DotSeparator />
        <Link to="host" spy>
          The host
        </Link>
        <DotSeparator />
        <Link to="location" spy>
          Location
        </Link>
      </ScrollNav>

      {isSticky && (
        <Sm>
          <Buttons>
            <Button>
              <ButtonIcon icon="share" />
              Share
            </Button>
            <Button onClick={onSave}>
              <ButtonSaveIcon isSaved={isSaved} />
              {isSaved ? 'Saved' : 'Save'}
            </Button>
          </Buttons>
        </Sm>
      )}
    </Wrap>
  );
}
