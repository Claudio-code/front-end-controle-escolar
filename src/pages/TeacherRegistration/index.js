import React, { useState } from 'react';

import FormTeacher from '../../components/FormTeacher';

import { Container } from '../../styles/global';

function TeacherRegistration() {
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
  const [cnhStatus, setCnhStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);
  const [academicTitleStatus, setAcademicTitleStatus] = useState(false);

  return (
    <Container>
      <FormTeacher
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
        cnhStatus={cnhStatus}
        setCnhStatus={setCnhStatus}
        age={age}
        setAge={setAge}
        ageStatus={ageStatus}
        setAgeStatus={setAgeStatus}
        academicTitle={academicTitle}
        setAcademicTitle={setAcademicTitle}
        academicTitleStatus={academicTitleStatus}
        setAcademicTitleStatus={setAcademicTitleStatus}
      />
    </Container>
  );
}

export default TeacherRegistration;
