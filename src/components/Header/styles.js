import styled from 'styled-components';
import button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Container = styled.div`
  header {
    background: #212121;
    color: #ffc400;
  }
`;

export const Logo = styled.img`
  width: 22vh;
`;

export const ContainerMenus = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex: 1;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.p`
  /* margin-left: 1vh; */
  font-size: 1.7vh;
`;

export const Button = styled(button).attrs({
  color: 'inherit',
})`
  font-weight: bold;
`;

export const LogoutIcon = styled(ExitToAppIcon)``;
