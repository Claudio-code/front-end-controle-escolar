import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vh;
  padding: 4vh;
  border-radius: 5px;
  background-color: #FFF;

  #ContainerRow {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
