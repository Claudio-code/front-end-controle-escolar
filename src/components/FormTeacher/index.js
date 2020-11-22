import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';
import Teacher from '../../domain/Teacher';

import {
  Container,
  Title,
  ContainerHeader,
} from './styles';

const FormTeacher = ({
  title,
  name,
  setName,
  nameStatus,
  setNameStatus,
  email,
  setEmail,
  emailStatus,
  setEmailStatus,
  cpf,
  setCpf,
  cpfStatus,
  setCpfStatus,
  rg,
  setRg,
  rgStatus,
  setRgStatus,
  cnh,
  setCnh,
  age,
  setAge,
  ageStatus,
  setAgeStatus,
  academicTitle,
  setAcademicTitle,
}) => {
  const handleChangeName = (event) => {
    const result = Teacher.validateName(event.target.value);
    setNameStatus(result);
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    const result = Teacher.validateEmail(event.target.value);
    setEmailStatus(result);
    setEmail(event.target.value);
  };

  const handleChangeCpf = (event) => {
    const result = Teacher.validateCpf(event.target.value);
    setCpfStatus(result);
    setCpf(event.target.value);
  };

  const handleChangeRg = (event) => {
    const result = Teacher.validateRg(event.target.value);
    setRgStatus(result);
    setRg(event.target.value);
  };

  const handleChangeCnh = (event) => setCnh(event.target.value);

  const handleChangeAge = (event) => {
    const result = Teacher.validateAge(event.target.value);
    setAgeStatus(result);
    setAge(event.target.value);
  };

  const handleAcademicTitle = (event) => setAcademicTitle(event.target.value);

  return (
    <Container>
      <ContainerHeader>
        <Title>{ title }</Title>
      </ContainerHeader>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputComponent
            id="idName"
            type="text"
            value={name}
            errorStatus={nameStatus}
            onchangeValue={handleChangeName}
            label="Nome do Professor"
            errorMessage="Insira um valor de nome sem numeros ou simbolos."
            infoMessage="Insira o nome do estudante."
          />
        </Grid>
        <Grid item xs={6}>
          <InputComponent
            id="idEmail"
            label="Email do Professor"
            value={email}
            errorStatus={emailStatus}
            type="email"
            onchangeValue={handleChangeEmail}
            errorMessage="Erro insira um Email valido."
            infoMessage="Insira um Email valido."
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
        <Grid item xs={4}>
          <InputComponent
            id="idCnh"
            label="Cnh do Estudante"
            value={cnh}
            type="number"
            onchangeValue={handleChangeCnh}
            errorMessage="Erro insira um cnh valido, apenas os numeros."
            infoMessage="Insira um cnh valido, apenas os numeros."
          />
        </Grid>
        <Grid item xs={6}>
          <InputComponent
            id="idAge"
            label="Idade do Estudante"
            value={age}
            type="number"
            onchangeValue={handleChangeAge}
            errorStatus={ageStatus}
            errorMessage="Erro insira um idade valido, apenas numeros."
            infoMessage="Insira um idade valido, apenas numeros."
          />
        </Grid>
        <Grid item xs={6}>
          <SelectComponent
            id="idAcademicTitle"
            label="Titulo Academico"
            type="text"
            value={academicTitle}
            onchangeValue={handleAcademicTitle}
            options={[
              'Mestre',
              'Especialista',
              'Doutor',
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

FormTeacher.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  setName: PropTypes.func,
  nameStatus: PropTypes.bool,
  setNameStatus: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  emailStatus: PropTypes.bool,
  setEmailStatus: PropTypes.func,
  cpf: PropTypes.string,
  setCpf: PropTypes.func,
  cpfStatus: PropTypes.bool,
  setCpfStatus: PropTypes.func,
  rg: PropTypes.string,
  setRg: PropTypes.func,
  rgStatus: PropTypes.bool,
  setRgStatus: PropTypes.func,
  cnh: PropTypes.string,
  setCnh: PropTypes.func,
  age: PropTypes.string,
  setAge: PropTypes.func,
  ageStatus: PropTypes.bool,
  setAgeStatus: PropTypes.func,
  academicTitle: PropTypes.string,
  setAcademicTitle: PropTypes.func,
};

FormTeacher.defaultProps = {
  title: 'Titulo do form',
  name: '',
  setName: () => {},
  nameStatus: true,
  setNameStatus: () => {},
  email: '',
  setEmail: () => {},
  emailStatus: true,
  setEmailStatus: () => {},
  cpf: '',
  setCpf: () => {},
  cpfStatus: true,
  setCpfStatus: () => {},
  rg: '',
  setRg: () => {},
  rgStatus: true,
  setRgStatus: () => {},
  cnh: '',
  setCnh: () => {},
  age: '',
  setAge: () => {},
  ageStatus: true,
  setAgeStatus: () => {},
  academicTitle: '',
  setAcademicTitle: () => {},
};

export default FormTeacher;
