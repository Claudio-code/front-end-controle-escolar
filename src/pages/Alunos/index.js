import React from 'react';

import ContextTitle from '../../components/ContextTitle';
import {
  Container,
  Title,
} from './styles';

function Alunos() {
  return (
    <Container>
      <Title>
        Opções do Aluno
      </Title>
      <ContextTitle title="Cadastro" />
    </Container>
  );
}

export default Alunos;
