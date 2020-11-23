import React from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';

import {
  Container,
  Title,
  Button,
  ToolbarContainer,
  ContainerLogo,
  LogoutIcon,
  ContainerMenus,
  Logo,
} from './styles';
import { signOut } from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const dispacth = useDispatch();

  return (
    <Container>
      <AppBar position="fixed">
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
            <Button onClick={() => history.push('/Topicos')}>
              Topicos
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
          <Button onClick={() => dispacth(signOut())}>
            <LogoutIcon />
          </Button>
        </ToolbarContainer>
      </AppBar>
    </Container>
  );
}
