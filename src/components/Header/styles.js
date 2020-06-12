import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Container = styled.div``;

export const ContainerMenus = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled(Typography).attrs({
  variant: 'p',
})``;

export const Button = styled(button).attrs({
  color: 'inherit',
})`
  font-weight: bold;
`;

export const LogoutIcon = styled(ExitToAppIcon)``;
