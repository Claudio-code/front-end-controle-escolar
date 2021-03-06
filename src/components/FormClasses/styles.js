import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 4vh;
`;

export const Title = styled(Typography).attrs({
  variant: 'h5',
})`
  font-weight: bold !important;
  color: #616161 !important;
`;
