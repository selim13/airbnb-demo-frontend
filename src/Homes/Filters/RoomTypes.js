import React from "react";

import Checkbox from "../../UI/Checkbox";
import { ControlsGroup } from "./styled";

import entireSvg from "./entire.svg";
import privateSvg from "./private.svg";
import sharedSvg from "./shared.svg";

export default function({
  isOpen = false,
  roomTypes = { entire: false, private: false, shared: false },
  onFilterChange = () => {},
  onClick = () => {},
  onClose = () => {},
  onReset = () => {}
}) {
  return (
    <div>
      <ControlsGroup>
        <Checkbox
          checked={roomTypes.entire}
          onChange={e => onFilterChange({ entire: e.target.checked })}
          label="Entire home"
          caption="Have a place to yourself"
        />
        <img src={entireSvg} alt="" width="32" height="32" />
      </ControlsGroup>
      <ControlsGroup>
        <Checkbox
          checked={roomTypes.private}
          onChange={e => onFilterChange({ private: e.target.checked })}
          label="Private room"
          caption="Have your own room and share some common spaces"
        />
        <img src={privateSvg} alt="" width="32" height="32" />
      </ControlsGroup>
      <ControlsGroup>
        <Checkbox
          checked={roomTypes.shared}
          onChange={e => onFilterChange({ shared: e.target.checked })}
          label="Shared room"
          caption="Stay in a shared space, like a common room"
        />
        <img src={sharedSvg} alt="" width="32" height="32" />
      </ControlsGroup>
    </div>
  );
}
