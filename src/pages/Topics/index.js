import React from 'react';

import { Title, ContainerCard } from './styles';
import { Container } from '../../styles/global';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

const Topics = () => (
  <Container>
    <Title>
      Opções dos Topicos para as disiplinas
    </Title>
    <ContextTitle title="Cadastro" />
    <ContainerCard>
      <CardMenu
        title="Cadastro topico"
        content="Cadastro apenas o topico."
        onClick={() => history.push('/Topicos/Cadastros')}
      />
    </ContainerCard>
    <ContextTitle title="Editar" />
    <ContainerCard>
      <CardMenu
        title="Atualizar um topico topico"
        content="Atualiza apenas o topico."
        onClick={() => history.push('/Topicos/Update')}
      />
    </ContainerCard>
  </Container>
);

export default Topics;
