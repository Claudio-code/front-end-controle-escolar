import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
} from '@material-ui/core';

function InputComponent(props) {
  const {
    id,
    label,
    value,
    type,
    onchangeValue,
    errorStatus,
    errorMessage,
    infoMessage,
  } = props;

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
