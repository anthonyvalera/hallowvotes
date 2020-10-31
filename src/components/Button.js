import React, { memo, useState, useCallback } from 'react';
import styled from '@emotion/styled';

import { colors, font, sizes } from '../globalStyles';

const StyledButton = styled.button`
  ${font}
  background: transparent;
  border: none;
  color: ${colors.secondary};
  cursor: pointer;
  font-size: 28px;
  letter-spacing: 10px;
  padding: 20px 80px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 20px ${colors.secondary};
  transition: color 1s ease;

  * + & {
    margin-top: ${sizes.xxl};
  }

  &:hover, &:focus, &:active {
    color: ${colors.secondaryHighlight};
    outline: none;
  }
`

function Button({children, ...rest}) {
  return <StyledButton {...rest}>{children}</StyledButton>
};

export default memo(Button);
