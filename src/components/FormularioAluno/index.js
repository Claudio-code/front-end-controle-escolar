import React, { useState } from 'react';
import {
  Paper,
  Grid,
} from '@material-ui/core';

import Student from '../../domain/Student';
import InputComponent from '../InputComponent';
import { Container, Title, Content, ContainerHeader } from './styles';

function FormularioAluno({
  title,
  name, setName,
  email, setEmail,
  cnh, setCnh,
  cpf, setCpf,
  rg, setRg,
  age, setAge,
  ethnicity, setEthnicity,
  sex, setSex,
}) {
  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [cnhStatus, setCnhStatus] = useState(false);
  const [cpfStatus, setCpfStatus] = useState(false);
  const [rgStatus, setRgStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);
  const [ethnicityStatus, setEthnicityStatus] = useState(false);
  const [sexStatus, setSexStatus] = useState(false);

  const handleChangeName = (event) => {
    const result = Student.validateName(event.target.value);
    setNameStatus(result);
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    const result = Student.validateEmail(event.target.value);
    setEmailStatus(result);
    setEmail(event.target.value);
  };

  const handleChangeCpf = (event) => {
    const result = Student.validateCpf(event.target.value);
    setCpfStatus(result);
    setCpf(event.target.value);
  };

  const handleChangeCnh = (event) => setCnh(event.target.value);

  const handleChangeAge = (event) => {
    const result = Student.validateAge(event.target.value);
    setAgeStatus(result);
    setAge(event.target.value);
  };

  return (
    <Container>
      <ContainerHeader>
        <Title>{ title }</Title>
      </ContainerHeader>
      <Content>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputComponent
              id="idName"
              label="Nome"
              value={name}
              type="text"
              onchangeValue={handleChangeName}
              errorStatus={nameStatus}
              errorMessage="Insira um valor de nome sem numeros ou simbolos."
              infoMessage="Insira o nome do estudante."
            />
          </Grid>
          <Grid item xs={6}>
            <InputComponent
              id="idEmail"
              label="E-mail"
              value={email}
              type="email"
              onchangeValue={handleChangeEmail}
              errorStatus={emailStatus}
              errorMessage="Insira um email valido."
              infoMessage="Insira um email de contato para o estudante."
            />
          </Grid>
          <Grid item xs={6}>
            <InputComponent
              id="idCpf"
              label="Cpf"
              value={cpf}
              type="number"
              onchangeValue={handleChangeCpf}
              errorStatus={cpfStatus}
              errorMessage="Erro insira um cpf valido, apenas os numeros."
              infoMessage="Insira um cpf valido, apenas os numeros."
            />
          </Grid>
          <Grid item xs={6}>
            <InputComponent
              id="idCnh"
              label="Cnh"
              value={cnh}
              type="number"
              onchangeValue={handleChangeCnh}
              errorStatus={cnhStatus}
              errorMessage="Erro insira um cnh valido, apenas os numeros."
              infoMessage="Insira um cnh valido, apenas os numeros."
            />
          </Grid>
          <Grid item xs={3}>
            <InputComponent
              id="idAge"
              label="Idade"
              value={age}
              type="number"
              onchangeValue={handleChangeAge}
              errorStatus={ageStatus}
              errorMessage="Erro insira um idade valido, apenas numeros."
              infoMessage="Insira um idade valido, apenas numeros."
            />
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
}

export default FormularioAluno;
