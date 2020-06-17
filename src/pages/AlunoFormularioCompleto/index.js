import React, { useState } from 'react';

import { Container } from './styles';
import FormularioAluno from '../../components/FormularioAluno';

function AlunoFormularioCompleto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  return (
    <Container>
      <FormularioAluno
        title="Cadastro de Aluno"
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        cnh={cnh}
        setCnh={setCnh}
        cpf={cpf}
        setCpf={setCpf}
        rg={rg}
        setRg={setRg}
        age={age}
        setAge={setAge}
        ethnicity={ethnicity}
        setEthnicity={setEthnicity}
        sex={sex}
        setSex={setSex}
      />
    </Container>
  );
}

export default AlunoFormularioCompleto;
