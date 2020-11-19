import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';

import {
  Container,
  Title,
  ContainerHeader,
} from './styles';

function FormTeacher({
  title,
  name,
  setName,
  email,
  setEmail,
}) {
  return (
    <Container>
      <ContainerHeader>
        <Title>title</Title>
      </ContainerHeader>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          name
        </Grid>
        <Grid item xs={6}>
          email
        </Grid>
        <Grid item xs={4}>
          cpf
        </Grid>
        <Grid item xs={4}>
          rg
        </Grid>
        <Grid item xs={4}>
          cnh
        </Grid>
        <Grid item xs={6}>
          age
        </Grid>
        <Grid item xs={6}>
          academia
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormTeacher;
