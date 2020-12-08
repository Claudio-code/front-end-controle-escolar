import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import InputComponent from '../InputComponent';
import { Container, ContainerHeader, Title } from './styles';
import Course from '../../domain/Course';

const FormCourse = ({
  title,
  name,
  setName,
  nameStatus,
  setNameStatus,
  description,
  setDescription,
  descriptionStatus,
  setDescriptionStatus,
  totalAmountHours,
  setTotalAmountHours,
  totalAmountHoursStatus,
  setTotalAmountHoursStatus,
}) => {
  const handleChangeName = (event) => {
    setNameStatus(false);
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescriptionStatus(false);
    setDescription(event.target.value);
  };

  const handleChangeAmountHours = (event) => {
    const result = Course.validateNumbers(Number(event.target.value));
    setTotalAmountHoursStatus(!result);
    setTotalAmountHours(String(event.target.value));
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
            label="Nome do Curso"
            errorMessage="Insira um valor de nome sem simbolos."
            infoMessage="Insira um nome valido."
          />
        </Grid>
        <Grid item xs={4}>
          <InputComponent
            id="idTotalAmountHours"
            type="number"
            value={totalAmountHours}
            errorStatus={totalAmountHoursStatus}
            onchangeValue={handleChangeAmountHours}
            label="Carga horaria do Curso"
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
            label="Descrição do Curso"
            errorMessage="Insira um valor de nome sem numeros ou simbolos."
            infoMessage="Insira um nome valido."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

FormCourse.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  setName: PropTypes.func,
  nameStatus: PropTypes.bool,
  setNameStatus: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  descriptionStatus: PropTypes.bool,
  setDescriptionStatus: PropTypes.func,
  totalAmountHours: PropTypes.string,
  setTotalAmountHours: PropTypes.func,
  totalAmountHoursStatus: PropTypes.bool,
  setTotalAmountHoursStatus: PropTypes.func,
};

FormCourse.defaultProps = {
  title: 'Titulo do form',
  name: '',
  setName: () => {},
  nameStatus: false,
  setNameStatus: () => {},
  description: '',
  setDescription: () => {},
  descriptionStatus: false,
  setDescriptionStatus: () => {},
  totalAmountHours: '',
  setTotalAmountHours: () => {},
  totalAmountHoursStatus: false,
  setTotalAmountHoursStatus: () => {},
};

export default FormCourse;
