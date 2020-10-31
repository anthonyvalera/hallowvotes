import React, { memo } from 'react';
import styled from '@emotion/styled';

import { colors, font } from '../globalStyles';

const StyledLabel = styled.label`
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 0.58px;
  text-align: center;
`;

function Label({ children }) {
  return (
    <StyledLabel>{children}</StyledLabel>
  )
};

export default memo(Label);
