import * as React from "react";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: (value: string) => void;
}

const ENTER_KEY_CODE = 13;

export default function({value, onChange, onEnter}: IProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.keyCode === ENTER_KEY_CODE) {
          onEnter(value);
        }
      }}
    />
  );
}
