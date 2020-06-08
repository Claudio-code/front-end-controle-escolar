import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

export const Container = styled.div``;

export const ToolbarContainer = styled(Toolbar)`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  font-weight: bold;
`;
