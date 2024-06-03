
import React from 'react';
import { StyledButton } from './Button.styles';

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
