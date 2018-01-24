import React from 'react';
import MediaQuery from 'react-responsive';

import bp from '../breakpoints';

export const Sm = props => <MediaQuery {...props} minWidth={bp.sm} />;
export const Md = props => <MediaQuery {...props} minWidth={bp.md} />;
export const Lg = props => <MediaQuery {...props} minWidth={bp.lg} />;

export const ToSm = props => <MediaQuery {...props} maxWidth={bp.sm - 1} />;
export const ToMd = props => <MediaQuery {...props} maxWidth={bp.md - 1} />;
export const ToLg = props => <MediaQuery {...props} maxWidth={bp.lg - 1} />;

export const XsOnly = props => <MediaQuery {...props} maxWidth={bp.sm - 1} />;
export const SmOnly = props => <MediaQuery {...props} minWidth={bp.sm} maxWidth={bp.md - 1} />;
export const MdOnly = props => <MediaQuery {...props} minWidth={bp.sm} maxWidth={bp.lg - 1} />;
