import 'react-perfect-scrollbar/dist/css/styles.css';
import styled, { createGlobalStyle } from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vh;
  padding: 4vh;
  border-radius: 5px;
  background-color: #FFF;
`;

export const VerticalSeparator = styled.div`
  height: 40vh;
  border-style: solid;
  border-color: #ffc107;
  border-width: 0vh 0.3vh 0vh 0vh;
  align-self: center;
  margin: 5vh;
`;
export const HorizontalSeparator = styled.div`
  width: 90%;
  border-style: solid;
  border-color: #ffc107;
  border-width: 0vh 0vh 0.3vh 0vh;
  align-self: center;
  margin: 5vh;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonGoBack = styled(Button).attrs({
  variant: 'contained',
})`
  background-color: #9e9e9e !important;
  color: #fff !important;
  margin: 0px 02vh 0px 02vh !important;
`;

export const ButtonError = styled(Button).attrs({
  variant: 'contained',
})`
  background-color: #f44336 !important;
  color: #fff !important;
  margin: 0px 02vh 0px 02vh !important;
`;

export const ButtonSucess = styled(Button).attrs({
  variant: 'contained',
})`
  background-color: #4caf50 !important;
  color: #fff !important;
  margin: 0px 02vh 0px 02vh !important;
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
