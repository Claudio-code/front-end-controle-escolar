import styled from 'styled-components';
import { TableHead, TableCell, Typography } from '@material-ui/core';
import { Container } from '../../styles/global';

export const TableCellHeader = styled(TableCell).attrs({
  align: 'center', size: 'medium',
})`
  color: white !important;
  font-weight: bold !important;
`;

export const TableCellBody = styled(TableCell).attrs({
  align: 'center',
})``;

export const TableHeader = styled(TableHead).attrs({
})`
  background-color: #212121 !important;
`;

export const ContainerTable = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  variant: 'h5',
})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  font-weight: bold;
`;
