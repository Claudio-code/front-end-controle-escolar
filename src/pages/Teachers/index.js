import React from 'react';

import { Title, ContainerCard } from './styles';
import { Container } from '../../styles/global';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

const Teachers = () => (
  <Container>
    <Title>
      Opções do Professor
    </Title>
    <ContextTitle title="Cadastro" />
    <ContainerCard>
      <CardMenu
        title="Cadastro Professor"
        content="Cadastro apenas do professor."
        onClick={() => history.push('/Professores/Cadastros')}
      />
    </ContainerCard>
    <ContextTitle title="Editar" />
    <ContainerCard>
      <CardMenu
        title="Editar Professor"
        content="Editar apenas do professor."
        onClick={() => history.push('/Professores/Update')}
      />
    </ContainerCard>
  </Container>
);

export default Teachers;
