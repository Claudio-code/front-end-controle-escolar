import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

import { Container } from './styles';
import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';
import Responsible from "../../domain/Responsible";

function FormResponsible(props) {
  const {
    name,
    setName,
    nameStatus,
    setNameStatus,
    email,
    setEmail,
    emailStatus,
    setEmailStatus,
    kinship,
    setKinship,
    cpf,
    setCpf,
    cpfStatus,
    setCpfStatus,
    rg,
    setRg,
    rgStatus,
    setRgStatus,
  } = props;

  const handleChangeKinship = (event) => setKinship(event.target.value);
  const handleChangeName = (event) => {
    const result = Responsible.validateName(event.target.value);
    setNameStatus(result);
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    const result = Responsible.validateEmail(event.target.value);
    setEmailStatus(result);
    setEmail(event.target.value);
  };

  const handleChangeCpf = (event) => {
    const result = Responsible.validateCpf(event.target.value);
    setCpfStatus(result);
    setCpf(event.target.value);
  };

  const handleChangeRg = (event) => {
    const result = Responsible.validateRg(event.target.value);
    setRgStatus(result);
    setRg(event.target.value);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputComponent
            id="idName"
            label="Nome do Responsavel"
            value={name}
            errorStatus={nameStatus}
            onchangeValue={handleChangeName}
            errorMessage="Erro insira um nome, apenas letras."
            infoMessage="Insira apenas letras."
          />
        </Grid>
        <Grid item xs={6}>
          <InputComponent
            id="idEmail"
            label="Email do Responsavel"
            value={email}
            errorStatus={emailStatus}
            type="email"
            onchangeValue={handleChangeEmail}
            errorMessage="Erro insira um Email valido."
            infoMessage="Insira um Email valido."
          />
        </Grid>
        <Grid item xs={4}>
          <SelectComponent
            id="idKinship"
            value={kinship}
            onchangeValue={handleChangeKinship}
            label="Tipo do parentesco"
            options={[
              'Pai',
              'Mãe',
              'Responsavel',
            ]}
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idCpf"
            label="Cpf do Responsavel"
            value={cpf}
            errorStatus={cpfStatus}
            type="number"
            onchangeValue={handleChangeCpf}
            errorMessage="Erro insira um cpf valido, apenas os numeros."
            infoMessage="Insira um cpf valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idRg"
            label="Rg do Responsavel"
            value={rg}
            errorStatus={rgStatus}
            type="number"
            onchangeValue={handleChangeRg}
            errorMessage="Erro insira um rg valido, apenas os numeros."
            infoMessage="Insira um rg valido, apenas os numeros."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

FormResponsible.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  nameStatus: PropTypes.bool,
  setNameStatus: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  emailStatus: PropTypes.bool,
  setEmailStatus: PropTypes.func,
  kinship: PropTypes.string,
  setKinship: PropTypes.func,
  cpf: PropTypes.string,
  setCpf: PropTypes.func,
  cpfStatus: PropTypes.bool,
  setCpfStatus: PropTypes.func,
  rg: PropTypes.string,
  setRg: PropTypes.func,
  rgStatus: PropTypes.bool,
  setRgStatus: PropTypes.func,
};

FormResponsible.defaultProps = {
  name: '',
  setName: () => {},
  nameStatus: false,
  setNameStatus: () => {},
  email: '',
  setEmail: () => {},
  emailStatus: false,
  setEmailStatus: () => {},
  kinship: '',
  setKinship: () => {},
  cpf: '',
  setCpf: () => {},
  cpfStatus: false,
  setCpfStatus: () => {},
  rg: '',
  setRg: () => {},
  rgStatus: false,
  setRgStatus: () => {},
};

export default FormResponsible;
