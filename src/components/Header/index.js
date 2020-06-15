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
  Logo
} from './styles';
import history from '../../services/history';

export default function Header() {
  return (
    <Container>
      <AppBar position="static">
        <ToolbarContainer>
          <ContainerLogo onClick={() => history.push('/dashboard')}>
            <div>
              <Logo src="https://faculdadefacec.edu.br/wp-content/themes/faculdade-facec/img/logo.png" />
              <Title>
                Sistema de controle escolar
              </Title>
            </div>
          </ContainerLogo>
          <ContainerMenus>
            <Button onClick={() => history.push('/Alunos')}>
              Alunos
            </Button>
            <Button onClick={() => history.push('/Professores')}>
              Professores
            </Button>
            <Button onClick={() => history.push('/Disiplinas')}>
              Disiplinas
            </Button>
            <Button onClick={() => history.push('/Cursos')}>
              Cursos
            </Button>
            <Button onClick={() => history.push('/Turmas')}>
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
