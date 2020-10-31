import React, { memo } from 'react';
import styled from '@emotion/styled';
import { colors, sizes } from '../globalStyles';

const StyledTitle = styled.h1`
  font-size: 45px;
  color: ${colors.secondary};
  letter-spacing: 31px;
  text-align: center;
  text-shadow: 0 0 10px ${colors.secondary};
  margin-bottom: 80px;
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>
};

export default memo(Title);
