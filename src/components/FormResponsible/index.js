import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

import { Container } from './styles';
import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';

function FormResponsible(props) {
  const {
    name,
    setName,
    email,
    setEmail,
    kinship,
    setKinship,
    cpf,
    setCpf,
    rg,
    setRg,
  } = props;
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputComponent
            id="idName"
            label="Nome do Responsavel"
            value={name}
            type="number"
              // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um nome, apenas letras."
            infoMessage="Insira apenas letras."
          />
        </Grid>
        <Grid item xs={6}>
          <InputComponent
            id="idCpf"
            label="Cpf do Responsavel"
            value={cpf}
            type="number"
              // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cpf valido, apenas os numeros."
            infoMessage="Insira um cpf valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={4}>
          <SelectComponent
            id="idKinship"
            value={kinship}
            // onchangeValue={handleChangeSex}
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
            type="number"
              // onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cpf valido, apenas os numeros."
            infoMessage="Insira um cpf valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idRg"
            label="Rg do Responsavel"
            value={rg}
            type="number"
              // onchangeValue={handleChangeCnh}
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
  email: PropTypes.string,
  setEmail: PropTypes.func,
  kinship: PropTypes.string,
  setKinship: PropTypes.func,
  cpf: PropTypes.string,
  setCpf: PropTypes.func,
  rg: PropTypes.string,
  setRg: PropTypes.func,
};

FormResponsible.defaultProps = {
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  kinship: '',
  setKinship: () => {},
  cpf: '',
  setCpf: () => {},
  rg: '',
  setRg: () => {},
};

export default FormResponsible;
