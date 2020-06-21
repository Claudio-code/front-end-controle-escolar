import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { Container } from './styles';
import InputComponent from '../InputComponent';

function FormularioEndereço(props) {
  const {
    cep,
    setCep,
    city,
    setCity,
    country,
    setCountry,
    publicPlace,
    setPublicPlace,
    number,
    setNumber,
  } = props;

  return (
    <Container>
      dqdwq qwdqw
    </Container>
  );
}

FormularioEndereço.propTypes = {
  cep: PropTypes.string,
  setCep: PropTypes.func,
  city: PropTypes.string,
  setCity: PropTypes.func,
  country: PropTypes.string,
  setCountry: PropTypes.func,
  publicPlace: PropTypes.string,
  setPublicPlace: PropTypes.func,
  number: PropTypes.string,
  setNumber: PropTypes.func,
};

FormularioEndereço.defaultProps = {
  cep: '',
  setCep: () => {},
  city: '',
  setCity: () => {},
  country: '',
  setCountry: () => {},
  publicPlace: '',
  setPublicPlace: () => {},
  number: '',
  setNumber: () => {},
};

export default FormularioEndereço;
