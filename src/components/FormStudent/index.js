import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import Student from '../../domain/Student';
import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';
import {
  Container,
  Title,
  ContainerHeader,
} from './styles';

function FormStudent({
  title,
  name,
  setName,
  email,
  setEmail,
  cnh,
  setCnh,
  cpf,
  setCpf,
  rg,
  setRg,
  age,
  setAge,
  ethnicity,
  setEthnicity,
  sex,
  setSex,
}) {
  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [cnhStatus,] = useState(false);
  const [cpfStatus, setCpfStatus] = useState(false);
  const [rgStatus, setRgStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);

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
  const handleChangeSex = (event) => setSex(event.target.value);
  const handleChangeEthnicity = (event) => setEthnicity(event.target.value);

  const handleChangeRg = (event) => {
    const result = Student.validateRg(event.target.value);
    setRgStatus(result);
    setRg(event.target.value);
  };

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
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputComponent
              id="idName"
              label="Nome do Estudante"
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
              label="E-mail do Estudante"
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
              label="Cpf do Estudante"
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
              label="Cnh do Estudante"
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
              label="Idade do Estudante"
              value={age}
              type="number"
              onchangeValue={handleChangeAge}
              errorStatus={ageStatus}
              errorMessage="Erro insira um idade valido, apenas numeros."
              infoMessage="Insira um idade valido, apenas numeros."
            />
          </Grid>
          <Grid item xs={3}>
            <SelectComponent
              id="idSex"
              value={sex}
              onchangeValue={handleChangeSex}
              label="Orientação sexual do Estudante"
              options={[
                'Masculino',
                'Feminino',
                'Outro',
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <InputComponent
              id="idRg"
              label="Rg do Estudante"
              value={rg}
              type="number"
              onchangeValue={handleChangeRg}
              errorStatus={rgStatus}
              errorMessage="Erro insira um rg valido, apenas numeros."
              infoMessage="Insira um rg valido, apenas numeros."
            />
          </Grid>
          <Grid item xs={3}>
            <SelectComponent
              id="idSex"
              value={ethnicity}
              onchangeValue={handleChangeEthnicity}
              label="Etnia do estudante"
              options={[
                'Brancos',
                'Negros',
                'Indígenas',
                'Pardos',
                'Mulatos',
                'Caboclos',
                'Cafuzos',
              ]}
            />
          </Grid>
        </Grid>
    </Container>
  );
}

FormStudent.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  setName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  cnh: PropTypes.string,
  setCnh: PropTypes.func,
  cpf: PropTypes.string,
  setCpf: PropTypes.func,
  rg: PropTypes.string,
  setRg: PropTypes.func,
  age: PropTypes.string,
  setAge: PropTypes.func,
  ethnicity: PropTypes.string,
  setEthnicity: PropTypes.func,
  sex: PropTypes.string,
  setSex: PropTypes.func,
};

FormStudent.defaultProps = {
  title: 'Titulo do form',
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  cnh: '',
  setCnh: () => {},
  cpf: '',
  setCpf: () => {},
  rg: '',
  setRg: () => {},
  age: '',
  setAge: () => {},
  ethnicity: '',
  setEthnicity: () => {},
  sex: '',
  setSex: () => {},
};

export default FormStudent;
