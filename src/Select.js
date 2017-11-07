import React from "react";

export default function(props) {
  const options = props.options.map(opt => <option>{opt}</option>);
  return (
    <div>
      <label htmlFor={props.name} className="hidden">
        {props.label}
      </label>
      <select name={props.name} id={props.name}>
        {options}
      </select>
    </div>
  );
}
