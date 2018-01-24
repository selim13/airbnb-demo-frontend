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

export default class extends React.Component {
  static defaultProps = {
    isOpen: false,
    heading: '',
    buttonText: '',
    resetButtonTitle: 'Reset',
    hasMobileHeaderSeparator: false,
    hasMobileFooter: false,
    onClick: () => {},
    onClose: () => {},
    onReset: () => {},
  };
  render() {
    return (
      <Wrap className={this.props.className}>
        <Button isActive={this.props.isOpen} onClick={this.props.onClick}>
          {this.props.buttonText}
        </Button>
        {this.props.isOpen &&
          this.props.children && (
            <div>
              <Dropdown>
                <XsOnly>
                  <MobileHeader
                    heading={this.props.heading}
                    hasSeparator={this.props.hasMobileHeaderSeparator}
                    onClose={this.props.onClose}
                    onReset={this.props.onReset}
                  />
                </XsOnly>

                {this.props.children}

                <Sm>
                  <Footer>
                    <CancelButton onClick={this.props.onReset}>
                      Cancel
                    </CancelButton>
                    <ApplyButton onClick={this.props.onClose}>
                      Apply
                    </ApplyButton>
                  </Footer>
                </Sm>
                {this.props.hasMobileFooter && (
                  <XsOnly>
                    <BodyClassName className="body--fixed">
                      <MobileFooter>
                        <MobilePrimaryButton onClick={this.props.onClose}>
                          Save
                        </MobilePrimaryButton>
                      </MobileFooter>
                    </BodyClassName>
                  </XsOnly>
                )}
              </Dropdown>
              <DropdownOverlay onClick={this.props.onClose} />
            </div>
          )}
      </Wrap>
    );
  }
}
