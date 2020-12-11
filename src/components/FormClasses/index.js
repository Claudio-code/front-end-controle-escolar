import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import InputComponent from '../InputComponent';
import { Container, ContainerHeader, Title } from './styles';
import Classes from '../../domain/Classes';

const FormClasses = ({
  title,
  name,
  setName,
  nameStatus,
  setNameStatus,
  maximumStudents,
  setMaximumStudents,
  maximumStudentsStatus,
  setMaximumStudentsStatus,
}) => {
  const handleChangeName = (event) => {
    setNameStatus(false);
    setName(event.target.value);
  };

  const handleChangeMaximumStudents = (event) => {
    const result = Classes.validateNumbers(Number(event.target.value));
    setMaximumStudentsStatus(!result);
    setMaximumStudents(String(event.target.value));
  };

  return (
    <Container>
      <ContainerHeader>
        <Title>{ title }</Title>
      </ContainerHeader>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputComponent
            id="idName"
            type="text"
            value={name}
            errorStatus={nameStatus}
            onchangeValue={handleChangeName}
            label="Nome do Curso"
            errorMessage="Insira um valor de nome sem simbolos."
            infoMessage="Insira um nome valido."
          />
        </Grid>
        <Grid item xs={12}>
          <InputComponent
            id="idMaximumStudents"
            type="number"
            value={maximumStudents}
            errorStatus={maximumStudentsStatus}
            onchangeValue={handleChangeMaximumStudents}
            label="maximo de alunos"
            errorMessage="Insira um numero inteiro, sem ponto, sem virgula."
            infoMessage="Insira um numero inteiro."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

FormClasses.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  setName: PropTypes.func,
  nameStatus: PropTypes.bool,
  setNameStatus: PropTypes.func,
  maximumStudents: PropTypes.string,
  setMaximumStudents: PropTypes.func,
  maximumStudentsStatus: PropTypes.bool,
  setMaximumStudentsStatus: PropTypes.func,
};

FormClasses.defaultProps = {
  title: 'Titulo do form',
  name: '',
  setName: () => {},
  nameStatus: false,
  setNameStatus: () => {},
  maximumStudents: 0,
  setMaximumStudents: () => {},
  maximumStudentsStatus: false,
  setMaximumStudentsStatus: () => {},
};

export default FormClasses;
