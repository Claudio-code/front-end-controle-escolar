import React, { useState } from 'react';

import { Container } from './styles';
import {
  HorizontalSeparator,
  VerticalSeparator,
  ButtonSucess,
  ButtonGoBack,
} from '../../styles/global';

import FormStudent from '../../components/FormStudent';
import AddressForm from '../../components/AddressForm';
import FormResponsible from '../../components/FormResponsible';

function StudentCompleteForm() {
  const [name, setName] = useState('');
  const [nameStatus, setNameStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState(false);
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');
  const [cpfStatus, setCpfStatus] = useState(false);
  const [rg, setRg] = useState('');
  const [rgStatus, setRgStatus] = useState(false);
  const [age, setAge] = useState('');
  const [ageStatus, setAgeStatus] = useState(false);
  const [sex, setSex] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  const [nameResponsible, setNameResponsible] = useState('');
  const [nameStatusResponsible, setNameStatusResponsible] = useState(false);
  const [emailResponsible, setEmailResponsible] = useState('');
  const [emailStatusResponsible, setEmailStatusResponsible] = useState(false);
  const [kinshipResponsible, setKinshipResponsible] = useState('');
  const [cpfResponsible, setCpfResponsible] = useState('');
  const [cpfStatusResponsible, setCpfStatusResponsible] = useState(false);
  const [rgResponsible, setRgResponsible] = useState('');
  const [rgStatusResponsible, setRgStatusResponsible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormStudent
          title="Cadastro Completo de Aluno"
          name={name}
          setName={setName}
          nameStatus={nameStatus}
          setNameStatus={setNameStatus}
          email={email}
          setEmail={setEmail}
          emailStatus={emailStatus}
          setEmailStatus={setEmailStatus}
          cnh={cnh}
          setCnh={setCnh}
          cpf={cpf}
          setCpf={setCpf}
          cpfStatus={cpfStatus}
          setCpfStatus={setCpfStatus}
          rg={rg}
          setRg={setRg}
          rgStatus={rgStatus}
          setRgStatus={setRgStatus}
          age={age}
          setAge={setAge}
          ageStatus={ageStatus}
          setAgeStatus={setAgeStatus}
          ethnicity={ethnicity}
          setEthnicity={setEthnicity}
          sex={sex}
          setSex={setSex}
        />
        <HorizontalSeparator />
        <div id="ContainerRow">
          <FormResponsible
            cpf={cpfResponsible}
            setCpf={setCpfResponsible}
            cpfStatus={cpfStatusResponsible}
            setCpfStatus={setCpfStatusResponsible}
            email={emailResponsible}
            setEmail={setEmailResponsible}
            emailStatus={emailStatusResponsible}
            setEmailStatus={setEmailStatusResponsible}
            name={nameResponsible}
            setName={setNameResponsible}
            nameStatus={nameStatusResponsible}
            setNameStatus={setNameStatusResponsible}
            kinship={kinshipResponsible}
            setKinship={setKinshipResponsible}
            rg={rgResponsible}
            setRg={setRgResponsible}
            rgStatus={rgStatusResponsible}
            setRgStatus={setRgStatusResponsible}
          />
          <VerticalSeparator />
          <AddressForm />
        </div>
        <ButtonGoBack>
          Voltar
        </ButtonGoBack>
        <ButtonSucess type="submit">
          Cadastrar
        </ButtonSucess>
      </form>
    </Container>
  );
}

export default StudentCompleteForm;
