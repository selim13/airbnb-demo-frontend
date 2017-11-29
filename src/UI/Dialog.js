import React from "react";
import styled from "styled-components";
import FocusLock from "react-focus-lock";

import bp from "../breakpoints";
import Modal from "./Modal";
import Overlay from "./Overlay";
import Icon from "./Icon";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  height: auto;
  z-index: 1000;
  padding: 16px 8px;
  overflow: auto;
  background: #ffffff;

  @media (min-width: ${bp.sm}px) {
    top: 50%;
    bottom: auto;
    left: 50%;
    right: auto;
    width: auto;
    height: auto;
    z-index: 1000;
    transform: translate(-50%, -50%);

    padding: 24px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    background: #ffffff;
  }
`;

const Heading = styled.div`
  margin-bottom: 24px;
`;

const CloseButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
  color: #484848;
`;

export default function({ isOpen = false, onClose = () => {}, children }) {
  return isOpen ? (
    <Modal>
      <Overlay onClick={onClose} />

      <Wrap>
        <FocusLock>
          <Heading>
            <CloseButton onClick={onClose} aria-label="Close">
              <Icon icon="close" size="16" />
            </CloseButton>
          </Heading>

          {children}
        </FocusLock>
      </Wrap>
    </Modal>
  ) : null;
}
