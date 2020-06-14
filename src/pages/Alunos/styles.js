import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vh;
  padding: 4vh;
  border-radius: 5px;
  background-color: #FFF;
`;

export const Title = styled(Typography).attrs({
  variant: 'h5',
})`
  display: flex;
  flex: 1;
  justify-content: center;
  font-weight: bold;
`;
