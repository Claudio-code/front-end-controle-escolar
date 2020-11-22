import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Teacher from '../../domain/Teacher';
import FormTeacher from '../../components/FormTeacher';
import { teacherRegistrationAction } from '../../store/modules/teacher/actions';
import {
  Container,
  ContainerButtons,
  ButtonSucess,
  ButtonGoBack,
} from '../../styles/global';

const TeacherRegistration = () => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cnh, setCnh] = useState('');
  const [age, setAge] = useState('');
  const [academicTitle, setAcademicTitle] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [cpfStatus, setCpfStatus] = useState(false);
  const [rgStatus, setRgStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const teacherRes = Teacher.validateAllData([
      name, email, rg, cpf, cnh, age, academicTitle,
    ]);

    if (nameStatus || emailStatus || ageStatus || rgStatus || cpfStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }
    if (!teacherRes) {
      return toast.error('Preencha os campos corretamente¹');
    }
    const teacher = new Teacher(
      name, email, rg, cpf, cnh, age, academicTitle,
    );

    return dispacth(teacherRegistrationAction(teacher));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormTeacher
          title="Cadastrar um Professor"
          name={name}
          setName={setName}
          nameStatus={nameStatus}
          setNameStatus={setNameStatus}
          email={email}
          setEmail={setEmail}
          emailStatus={emailStatus}
          setEmailStatus={setEmailStatus}
          cpf={cpf}
          setCpf={setCpf}
          cpfStatus={cpfStatus}
          setCpfStatus={setCpfStatus}
          rg={rg}
          setRg={setRg}
          rgStatus={rgStatus}
          setRgStatus={setRgStatus}
          cnh={cnh}
          setCnh={setCnh}
          age={age}
          setAge={setAge}
          ageStatus={ageStatus}
          setAgeStatus={setAgeStatus}
          academicTitle={academicTitle}
          setAcademicTitle={setAcademicTitle}
        />
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
};

export default TeacherRegistration;
