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

  return (
    <Container>
      <FormTeacher />
    </Container>
  );
}

export default TeacherRegistration;
