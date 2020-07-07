import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children,className, ...otherProps }) => (
  <button className={'custom-button '+className} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
