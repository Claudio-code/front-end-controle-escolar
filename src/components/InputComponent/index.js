import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormHelperText,
  Input,
} from '@material-ui/core';

import { Label } from './styles';

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
      <Label>{ label }</Label>
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

InputComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onchangeValue: PropTypes.func,
  errorStatus: PropTypes.bool,
  errorMessage: PropTypes.string,
  infoMessage: PropTypes.string,
};

InputComponent.defaultProps = {
  id: '',
  label: '',
  value: '',
  type: 'text',
  onchangeValue: () => {},
  errorStatus: false,
  errorMessage: 'O campo foi preenchido com valor errado',
  infoMessage: 'Preencha o campo corretamente.',
};

export default InputComponent;
