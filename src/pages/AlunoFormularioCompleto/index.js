import React, { useState } from 'react';

import { Container } from './styles';
import { HorizontalSeparator, VerticalSeparator } from '../../styles/global';
import FormularioAluno from '../../components/FormularioAluno';
import FormularioEndereco from '../../components/FormularioEndereco';
import FormularioResponsavel from '../../components/FormularioResponsavel';

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
        title="Cadastro Completo de Aluno"
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
      <HorizontalSeparator />
      <div id="ContainerRow">
        <FormularioEndereco />
        <VerticalSeparator />
        <FormularioResponsavel />
      </div>
    </Container>
  );
}

export default AlunoFormularioCompleto;
