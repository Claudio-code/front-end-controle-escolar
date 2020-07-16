import React from 'react';

import { Title, ContainerCard } from './styles';
import { Container } from '../../styles/global';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
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
          onClick={() => history.push('/Alunos/FormularioCadastro')}
        />
        <CardMenu
          title="Cadastro do Aluno e endereço"
          content="Cadastro do aluno e o endereço deixando pendente o responsavel."
          onClick={() => history.push('/Alunos/StudentAndAddressRegistration')}
        />
        <CardMenu
          title="Cadastro do Aluno e o seu responsavel"
          content="Cadastro do aluno e o responsavel deixando pendente o endereço."
          onClick={() => history.push('/Alunos/StudentAndGuardianRegistration')}
        />
      </ContainerCard>

      <ContextTitle title="Editar" />
      <ContainerCard>
        <CardMenu
          title="Editar todos os registros"
          content="Editar todos os dados do aluno, endereço e o responsavel."
          onClick={() => history.push('/Alunos/Update')}
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
