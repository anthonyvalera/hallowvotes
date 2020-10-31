import React, { memo, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { colors, font, sizes } from '../globalStyles';

const StyledInput = styled.input`
  ${font}
  background: transparent;
  border: 8px solid #FFFFFF;
  color: #fff;
  font-size: 30px;
  letter-spacing: 5px;
  margin-bottom: ${sizes.lg};
  padding: 10px 20px;

  &:hover, &:focus, &:active {
    outline: none;
  }
`;

function Input({ updateValue, value }) {
  return (
    <StyledInput onChange={updateValue} value={value} />
  )
};

export default memo(Input);
