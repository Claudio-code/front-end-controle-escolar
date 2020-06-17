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
  justify-content: center;
`;

export const Content = styled.form`
  display: flex;
  flex: 1;
  margin-top: 9vh;
`;

export const Title = styled(Typography).attrs({
  variant: 'h5',
})``;
