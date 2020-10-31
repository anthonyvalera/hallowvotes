import React, { memo } from 'react';
import styled from '@emotion/styled';
import { colors, sizes } from '../globalStyles';

const StyledTitle = styled.h1`
  font-size: ${({ size = 45 }) => `${size}px`};
  color: ${colors.secondary};
  letter-spacing: 31px;
  text-align: center;
  text-shadow: 0 0 10px ${colors.secondary};
  margin-bottom: 80px;
`;

function Title({ size, children }) {
  return <StyledTitle size={size}>{children}</StyledTitle>
};

export default memo(Title);
