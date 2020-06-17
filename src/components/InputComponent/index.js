import React from 'react';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
} from '@material-ui/core';

function InputComponent({
  id,
  label,
  value,
  type,
  onchangeValue,
  errorStatus,
  errorMessage,
  infoMessage,
}) {
  return (
    <FormControl fullWidth error={errorStatus}>
      <InputLabel htmlFor="component-helper">{ label }</InputLabel>
      <Input
        id={id}
        value={value}
        onChange={onchangeValue}
        type={type}
      />
      {errorStatus ? (
        <FormHelperText id={id}>{ errorMessage }</FormHelperText>
      ) : (
        <FormHelperText id={id}>{ infoMessage }</FormHelperText>
      )}
    </FormControl>
  );
}

export default InputComponent;
