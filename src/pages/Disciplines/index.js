import React from 'react';

import { Container } from '../../styles/global';
import { Title, ContainerCard } from './styles';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

function Disciplines() {
  return (
    <Container>
      <Title>
        Opções do Disiplinas
      </Title>
      <ContextTitle title="Cadastro" />
      <ContainerCard>
        <CardMenu
          title="Cadastro de disiplina"
          content="Cadastro apenas de disiplina."
          onClick={() => history.push('/Disiplinas/Cadastro')}
        />
      </ContainerCard>
      <ContextTitle title="Editar" />
      <ContainerCard>
        <CardMenu
          title="Atualizar disiplina"
          content="Atualizar os dados da disiplina."
          onClick={() => history.push('/Disiplinas/Update')}
        />
      </ContainerCard>
    </Container>
  );
}

export default Disciplines;
