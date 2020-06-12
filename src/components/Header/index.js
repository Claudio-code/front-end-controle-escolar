import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import SchoolIcon from '@material-ui/icons/School';

import {
  Container,
  Title,
  Button,
  ToolbarContainer,
  ContainerLogo,
  LogoutIcon,
  ContainerMenus,
} from './styles';
import history from '../../services/history';

export default function Header() {
  const goStudent = () => history.push('/Alunos');
  // const goStudent = () => history.push('/Alunos');

  return (
    <Container>
      <AppBar position="static">
        <ToolbarContainer>
          <ContainerLogo>
            <SchoolIcon />
            <Title>
              Sistema de controle escolar
            </Title>
          </ContainerLogo>
          <ContainerMenus>
            <Button>
              Alunos
            </Button>
            <Button>
              Professores
            </Button>
            <Button>
              Disiplinas
            </Button>
            <Button>
              Cursos
            </Button>
            <Button>
              Turmas
            </Button>
          </ContainerMenus>
          <Button>
            <LogoutIcon />
          </Button>
        </ToolbarContainer>
      </AppBar>
    </Container>
  );
}
