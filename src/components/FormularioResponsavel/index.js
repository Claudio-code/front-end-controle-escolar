import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

import { Container } from './styles';
import InputComponent from '../InputComponent';

function FormularioResponsavel(props) {
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
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

FormularioResponsavel.propTypes = {
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

FormularioResponsavel.defaultProps = {
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

export default FormularioResponsavel;
