import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import FormResponsible from '../../components/FormResponsible';
import FormStudent from '../../components/FormStudent';

import Student from '../../domain/Student';
import Responsible from '../../domain/Responsible';

import { StudentRegistrationAndResponsibleAction } from '../../store/modules/student/actions';

import {
  Container,
  HorizontalSeparator,
  ButtonGoBack,
  ButtonSucess,
  ContainerButtons,
} from '../../styles/global';
import { SeparatorMargin } from './styles';

function StudentAndGuardianRegistration() {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);
  const [rgStatus, setRgStatus] = useState(false);
  const [cpfStatus, setCpfStatus] = useState(false);

  const [nameResponsible, setNameResponsible] = useState('');
  const [emailResponsible, setEmailResponsible] = useState('');
  const [kinshipResponsible, setKinshipResponsible] = useState('');
  const [cpfResponsible, setCpfResponsible] = useState('');
  const [rgResponsible, setRgResponsible] = useState('');

  const [nameStatusResponsible, setNameStatusResponsible] = useState(false);
  const [emailStatusResponsible, setEmailStatusResponsible] = useState(false);
  const [cpfStatusResponsible, setCpfStatusResponsible] = useState(false);
  const [rgStatusResponsible, setRgStatusResponsible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentRes = Student.validateAllData([
      name, email, rg, cpf, cnh, age, ethnicity, sex,
    ]);
    const responsibleRes = Responsible.validateAllData([
      nameResponsible, emailResponsible,
      rgResponsible, cpfResponsible, kinshipResponsible,
    ]);

    if (nameStatus || emailStatus || ageStatus || rgStatus || cpfStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }

    if (nameStatusResponsible || emailStatusResponsible
      || rgStatusResponsible || cpfStatusResponsible) {
      return toast.error('Os dados do Formulario do responsavel aluno estão errados.');
    }

    if (!studentRes || !responsibleRes) {
      return toast.error('Preencha os campos corretamete.');
    }

    const student = new Student(
      name, email, rg, cpf, cnh,
      age, ethnicity, sex,
    );
    student.setResponsible(new Responsible(
      nameResponsible, emailResponsible, rgResponsible,
      cpfResponsible, kinshipResponsible,
    ));

    return dispacth(StudentRegistrationAndResponsibleAction(student));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormStudent
          title="Cadastro de Aluno e seu Responsavel"
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
        <SeparatorMargin />
        <ContainerButtons>
          <ButtonGoBack>
            Voltar
          </ButtonGoBack>
          <ButtonSucess type="submit">
            Cadastrar
          </ButtonSucess>
        </ContainerButtons>
      </form>
    </Container>
  );
}

export default StudentAndGuardianRegistration;
