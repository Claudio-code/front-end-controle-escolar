import React from 'react';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

import { Container } from '../../styles/global';
import { ContainerCard, Title } from './styles';

const Courses = () => (
  <Container>
    <Title>
      Opções dos Cursos
    </Title>
    <ContextTitle title="Cadastro" />
    <ContainerCard>
      <CardMenu
        title="Cadastro de Curso"
        content="Cadastro apenas do Curso."
        onClick={() => history.push('/Cursos/Cadastro')}
      />
      <CardMenu
        title="Cadastro de Curso e adição de Disiplinas"
        content="Cadastro o Curso e pode adicionar disiplinas."
        onClick={() => history.push('/Cursos/Cadastro/Adicionar/Disiplinas')}
      />
    </ContainerCard>
    <ContextTitle title="Editar" />
    <ContainerCard>
      <CardMenu
        title="Atualizar curso"
        content="Atualizar os dados do curso."
        onClick={() => history.push('/Cursos/Update')}
      />
    </ContainerCard>
    <ContextTitle title="Processos" />
    <ContainerCard>
      <CardMenu
        title="Adicionar coordenador no curso"
        onClick={() => history.push('/Cursos/Cadastro/Adicionar/Coordenador')}
      />
    </ContainerCard>
    <ContextTitle title="Relatorio" />
    <ContainerCard>
      <CardMenu
        title="relatorio cursos com coordenador"
        onClick={() => history.push('/Cursos/Relatorio/Coordenador')}
      />
      <CardMenu
        title="relatorio cursos com disiplinas"
        onClick={() => history.push('/Cursos/Relatorio/Disiplinas')}
      />
    </ContainerCard>
  </Container>
);

export default Courses;
