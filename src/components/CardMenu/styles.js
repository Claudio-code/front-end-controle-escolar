import styled from 'styled-components';
import { darken } from 'polished';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

export const Container = styled(Card)`
  max-width: 250px;
  box-shadow: -2px 0px 14px 0px #bdbdbd !important;
  cursor: pointer;

  &:hover {
    background: ${darken(0.01, '#fafafa')};
  }
`;

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  variant: 'subtitle1',
  component: 'p',
})`
  font-weight: bold;
`;

export const Content = styled(Typography).attrs({
  variant: 'body2',
  color: 'textSecondary',
  component: 'p',
})``;

export const ActionArea = styled(CardActionArea)`
  display: flex;
  height: 100%;
`;
