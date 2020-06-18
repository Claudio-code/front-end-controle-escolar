import styled, { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const VerticalSeparator = styled.div`
  height: 90vh;
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
