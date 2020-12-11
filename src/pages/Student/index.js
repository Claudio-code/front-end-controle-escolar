import React from 'react';

import { Title, ContainerCard } from './styles';
import { Container } from '../../styles/global';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

const Student = () => (
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
    <ContextTitle title="Processos" />
    <ContainerCard>
      <CardMenu
        title="Matricular"
        content="Fazer a matricula do aluno."
        onClick={() => history.push('/Alunos/MakeMatriculation')}
      />
      <CardMenu
        title="Remover Matricula"
        onClick={() => history.push('/Alunos/remover/matricula')}
      />
    </ContainerCard>
    <ContextTitle title="Relatórios" />
    <ContainerCard>

      <CardMenu
        title="Alunos com Responsavel e endereço cadastrado"
        onClick={() => history.push('/Alunos/relatorio/completo')}
      />
      <CardMenu
        title="Relatorio de alunos matriculados"
        onClick={() => history.push('/Alunos/relatorio/matriculados')}
      />
    </ContainerCard>
  </Container>
);

export default Student;
