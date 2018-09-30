import * as React from 'react';

interface Props {
  onClick: () => void;
}

export default function({onClick}: Props) {
  return <button onClick={onClick}>Clear completed</button>;
}
