import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Title = styled(Typography).attrs({
  variant: 'h5',
})`
  display: flex;
  flex: 1;
  justify-content: center;
  font-weight: bold;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;
