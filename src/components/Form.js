import React, { memo, useState, useCallback } from 'react';
import styled from '@emotion/styled';

import Input from './Input';
import Button from './Button';

import { colors, font } from '../globalStyles';
import Label from './Label';

const StyledLabel = styled.label`
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 0.58px;
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Form({ label, onFormSubmit }) {
  const [value, setValue] = useState('');

  const updateValue = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    onFormSubmit({ e, value })
  }, [value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input updateValue={updateValue} value={value} />
      <Label>{label}</Label>
      <Button>Submit</Button>
    </StyledForm>
  )
};

export default memo(Form);
