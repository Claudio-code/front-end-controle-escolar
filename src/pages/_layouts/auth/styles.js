import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(#2196f3, #000);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100vh;
  max-width: 60vh;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    width: 60vh;
    padding: 4vh;
    border-radius: 5px;
    background-color: #FFF;

    h2 {
      margin-bottom: 4vh;
      color: #616161;
    }

    .MuiTextField-root {
      margin: 3%;
    }

    button {
      background-color: #0d47a1;

      &:hover {
        background-color: #2962ff;
      }
    }
  }
`;
