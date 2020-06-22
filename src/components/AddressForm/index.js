import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { Container } from './styles';
import InputComponent from '../InputComponent';
import Andress from '../../domain/Andress';

function AddressForm({
  cep,
  setCep,
  cepStatus,
  setCepStatus,
  city,
  setCity,
  cityStatus,
  setCityStatus,
  country,
  setCountry,
  countryStatus,
  setCountryStatus,
  publicPlace,
  setPublicPlace,
  publicPlaceStatus,
  setPublicPlaceStatus,
  number,
  setNumber,
  numberStatus,
  setNumberStatus,
}) {
  const handleChangeCep = async (event) => {
    try {
      setCep(event.target.value);
      const result = await Andress.validarCep(String(event.target.value));
      setCepStatus(result.statusResponse);
      setCity(result.city);
      setPublicPlace(result.street);
      setCountry(result.state);
    } catch (error) {
      console.log(error);
      setCepStatus(true);
    }
  };

  const handleChangeNumber = (event) => setNumber(event.target.value);

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangePublicPlace = (event) => {
    setPublicPlace(event.target.value);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputComponent
            id="idCep"
            label="Cep do Estudante"
            value={cep}
            type="number"
            errorStatus={cepStatus}
            onchangeValue={handleChangeCep}
            errorMessage="Erro insira um cep valido, apenas os numeros."
            infoMessage="Insira um cep valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={6}>
          <InputComponent
            id="idCity"
            label="Cidade do Estudante"
            value={city}
            errorStatus={cityStatus}
            onchangeValue={handleChangeCity}
            errorMessage="Erro insira uma cidade valida, digite apenas letras."
            infoMessage="Insira uma cidade valida, digite apenas letras."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idCountry"
            label="Estado do Estudante"
            value={country}
            errorStatus={countryStatus}
            onchangeValue={handleChangeCountry}
            errorMessage="Erro insira um estado valido, digite apenas letras."
            infoMessage="Insira um estado valido, digite apenas letras."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idNumber"
            label="Numero da casa do Estudante"
            value={number}
            type="number"
            onchangeValue={handleChangeNumber}
            errorMessage="Erro insira o numero da casa."
            infoMessage="Insira  o numero da casa."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idPublicPlace"
            label="Av./Rua da casa do Estudante"
            value={publicPlace}
            onchangeValue={handleChangePublicPlace}
            errorMessage="Erro uma Av./rua valida."
            infoMessage="Insira um Av./rua valida."
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
