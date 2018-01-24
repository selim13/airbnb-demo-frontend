import React from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import Button from '../Button';
import { XsOnly, Sm } from '../mediaQueries';
import MobileHeader from './MobileHeader';
import Overlay from '../Overlay';

import {
  Dropdown,
  Footer,
  CancelButton,
  ApplyButton,
  MobileFooter,
  MobilePrimaryButton,
} from './styled';

const Wrap = styled.div`
  position: relative;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`;

const DropdownOverlay = Overlay.extend`
  z-index: -1;
`;

export default function ({
  className,
  children,
  isOpen = false,
  heading = '',
  buttonText = '',
  hasMobileHeaderSeparator = false,
  hasMobileFooter = false,
  onClick = () => {},
  onClose = () => {},
  onReset = () => {},
}) {
  return (
    <Wrap className={className}>
      <Button isActive={isOpen} onClick={onClick}>
        {buttonText}
      </Button>
      {isOpen &&
        children && (
          <div>
            <Dropdown>
              <XsOnly>
                <MobileHeader
                  heading={heading}
                  hasSeparator={hasMobileHeaderSeparator}
                  onClose={onClose}
                  onReset={onReset}
                />
              </XsOnly>

              {children}

              <Sm>
                <Footer>
                  <CancelButton onClick={onReset}>Cancel</CancelButton>
                  <ApplyButton onClick={onClose}>Apply</ApplyButton>
                </Footer>
              </Sm>
              {hasMobileFooter && (
                <XsOnly>
                  <BodyClassName className="body--fixed">
                    <MobileFooter>
                      <MobilePrimaryButton onClick={onClose}>Save</MobilePrimaryButton>
                    </MobileFooter>
                  </BodyClassName>
                </XsOnly>
              )}
            </Dropdown>
            <DropdownOverlay onClick={onClose} />
          </div>
        )}
    </Wrap>
  );
}
