import React from 'react';
import { getColumnProps } from 'react-flexbox-grid';
import { StickyContainer } from 'react-sticky';

export default function ({ children, ...props }) {
  return <StickyContainer className={getColumnProps(props).className}>{children}</StickyContainer>;
}
