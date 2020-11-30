import styled from 'styled-components';
import {
  TableHead,
  TableCell,
  Typography,
} from '@material-ui/core';

export const TableCellHeader = styled(TableCell).attrs({
  align: 'center',
})`
  color: white !important;
  font-weight: bold !important;
`;

export const TableCellBody = styled(TableCell).attrs({
  align: 'center',
})``;

export const TableHeader = styled(TableHead)`
  background-color: #212121 !important;
`;

export const Container = styled.div`
  margin: 4vh;
  border-radius: 5px;
  background-color: #FFF;
`;

export const Title = styled(Typography).attrs({
  variant: 'h5',
})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  font-weight: bold;
`;
