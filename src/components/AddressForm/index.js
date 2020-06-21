import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

import { Container } from './styles';
import InputComponent from '../InputComponent';

function AddressForm(props) {
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputComponent
            id="idCnh"
            label="Cnh do Estudante"
            value={21}
            type="number"
            // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cnh valido, apenas os numeros."
            infoMessage="Insira um cnh valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={6}>
          <InputComponent
            id="idCnh"
            label="Cnh do Estudante"
            value={21}
            type="number"
            // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cnh valido, apenas os numeros."
            infoMessage="Insira um cnh valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idCnh"
            label="Cnh do Estudante"
            value={21}
            type="number"
            // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cnh valido, apenas os numeros."
            infoMessage="Insira um cnh valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idCnh"
            label="Cnh do Estudante"
            value={21}
            type="number"
            // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cnh valido, apenas os numeros."
            infoMessage="Insira um cnh valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idCnh"
            label="Cnh do Estudante"
            value={21}
            type="number"
            // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cnh valido, apenas os numeros."
            infoMessage="Insira um cnh valido, apenas os numeros."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

AddressForm.propTypes = {
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

AddressForm.defaultProps = {
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

export default AddressForm;
