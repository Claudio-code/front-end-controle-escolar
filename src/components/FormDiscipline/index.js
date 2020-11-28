import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import InputComponent from '../InputComponent';
import { Container, ContainerHeader, Title } from './styles';
import Discipline from '../../domain/Discipline';

const FormDiscipline = ({
  title,
  name,
  setName,
  nameStatus,
  setNameStatus,
  description,
  setDescription,
  descriptionStatus,
  setDescriptionStatus,
  amountHours,
  setAmountHours,
  amountHoursStatus,
  setAmountHoursStatus,
}) => {
  const handleChangeName = (event) => {
    setNameStatus(false);
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    const result = Discipline.validateLetters(event.target.value);
    setDescriptionStatus(result);
    setDescription(event.target.value);
  };

  const handleChangeAmountHours = (event) => {
    const result = Discipline.validateNumbers(Number(event.target.value));
    setAmountHoursStatus(!result);
    setAmountHours(String(event.target.value));
  };

  return (
    <Container>
      <ContainerHeader>
        <Title>{ title }</Title>
      </ContainerHeader>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <InputComponent
            id="idName"
            type="text"
            value={name}
            errorStatus={nameStatus}
            onchangeValue={handleChangeName}
            label="Nome da Disiplina"
            errorMessage="Insira um valor de nome sem simbolos."
            infoMessage="Insira um nome valido."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idAmountHours"
            type="number"
            value={amountHours}
            errorStatus={amountHoursStatus}
            onchangeValue={handleChangeAmountHours}
            label="Carga horaria da Disiplina"
            errorMessage="Insira um numero inteiro, sem ponto, sem virgula."
            infoMessage="Insira um numero inteiro."
          />
        </Grid>
        <Grid item xs={12}>
          <InputComponent
            id="idDescription"
            type="text"
            value={description}
            errorStatus={descriptionStatus}
            onchangeValue={handleChangeDescription}
            label="Descrição da Disiplina"
            errorMessage="Insira um valor de nome sem numeros ou simbolos."
            infoMessage="Insira um nome valido."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

FormDiscipline.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  setName: PropTypes.func,
  nameStatus: PropTypes.bool,
  setNameStatus: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  descriptionStatus: PropTypes.bool,
  setDescriptionStatus: PropTypes.func,
  amountHours: PropTypes.string,
  setAmountHours: PropTypes.func,
  amountHoursStatus: PropTypes.bool,
  setAmountHoursStatus: PropTypes.func,
};

FormDiscipline.defaultProps = {
  title: 'Titulo do form',
  name: '',
  setName: () => {},
  nameStatus: false,
  setNameStatus: () => {},
  description: '',
  setDescription: () => {},
  descriptionStatus: false,
  setDescriptionStatus: () => {},
  amountHours: '',
  setAmountHours: () => {},
  amountHoursStatus: false,
  setAmountHoursStatus: () => {},
};

export default FormDiscipline;
