import * as React from "react";

interface IProps {
  onClick: () => void;
}

export default function({onClick}: IProps) {
  return <button onClick={onClick}>Clear completed</button>;
}
