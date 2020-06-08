import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import {
  Container,
  Title,
  LogoutButton,
  ToolbarContainer,
} from './styles';

export default function Header() {

  return(
    <Container>
       <AppBar position="static">
        <ToolbarContainer>
          <Title variant="h6">
            Sistema de controle escolar
          </Title>
          <LogoutButton color="inherit">
            Logout
          </LogoutButton>
        </ToolbarContainer>
      </AppBar>
    </Container>
  );
}
