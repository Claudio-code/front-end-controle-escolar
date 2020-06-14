import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4vh;
`;

export const Title = styled(Typography).attrs({
  variant: 'h6',
})`
  font-weight: bold;
`;

export const Borda = styled.div`
  width: 80vh;
  border-style: solid;
  border-color: #616161;
  border-width: 0px 0px 2px 0px;
`;
