import React from 'react';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import {
  Container,
  Title,
  ContainerCard,
} from './styles';
import history from '../../services/history';

function Alunos() {
  return (
    <Container>
      <Title>
        Opções do Aluno
      </Title>
      <ContextTitle title="Cadastro" />
      <ContainerCard>
        <CardMenu
          title="Cadastro completo"
          content="Cadastro do aluno, endereço e o responsavel."
          onClick={() => history.push('/Alunos/FormularioCompleto')}
        />
        <CardMenu
          title="Cadastro do Aluno"
          content="Cadastro do aluno, deixando pendente o endereço e o responsavel."
        />
        <CardMenu
          title="Cadastro do Aluno e endereço"
          content="Cadastro do aluno e o endereço deixando pendente o responsavel."
        />
        <CardMenu
          title="Cadastro do Aluno e o seu responsavel"
          content="Cadastro do aluno e o responsavel deixando pendente o endereço."
        />
      </ContainerCard>

      <ContextTitle title="Editar" />
      <ContainerCard>
        <CardMenu
          title="Editar todos os registros"
          content="Editar todos os dados do aluno, endereço e o responsavel."
        />
        <CardMenu
          title="Editar do Aluno"
          content="Editar todos os dados aluno, deixando imutavel o endereço e o responsavel."
        />
        <CardMenu
          title="Editar do Aluno e endereço"
          content="Editar todos os dados aluno e o endereço deixando imutavel o responsavel."
        />
        <CardMenu
          title="Editar do Aluno e o seu responsavel"
          content="Editar todos os dados aluno e o responsavel deixando imutavel o endereço."
        />
      </ContainerCard>

      <ContextTitle title="Outros" />
      <ContainerCard>
        <CardMenu
          title="Matricular"
          content="Fazer a matricula do aluno."
        />
        <CardMenu
          title="Cadastro o Aluno em uma turma"
          content="Cadastrar o aluno em uma turma."
        />
        <CardMenu
          title="Trocar o aluno de turma"
          content="Mover o aluno para uma turma que tenha vagas."
        />
        <CardMenu
          title="Cancelar a matricula"
          content="Desativar a matricula do aluno."
        />
      </ContainerCard>
    </Container>
  );
}

export default Alunos;
