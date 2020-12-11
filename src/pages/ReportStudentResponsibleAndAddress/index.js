import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Update, Delete } from '@material-ui/icons';

import history from '../../services/history';
import ModalUpdateStudent from '../../components/ModalUpdateStudent';
import {
  getAllStudentsAction,
} from '../../store/modules/student/actions';

import { Container, ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader, TableCellHeader, TableCellBody, Title,
} from './styles';


const ReportStudentResponsibleAndAddress = () => {
  const dispatch = useDispatch();
  const listStudent = useSelector((state) => state.student.studentsList);

  useEffect(() => {
    dispatch(getAllStudentsAction());
  }, []);

  console.log(listStudent);

  return (
    <Container>
      <Title>Relatorio de estudantes</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5' }}>
        <Table aria-label="customized table">
          <TableHeader>
            <TableRow>
              <TableCellHeader>Nome</TableCellHeader>
              <TableCellHeader>e-mail</TableCellHeader>
              <TableCellHeader>cpf</TableCellHeader>
              <TableCellHeader>rg</TableCellHeader>
              <TableCellHeader>idade</TableCellHeader>
              <TableCellHeader>Sexo</TableCellHeader>
              <TableCellHeader>Etnia</TableCellHeader>
              <TableCellHeader>nome do responsavel</TableCellHeader>
              <TableCellHeader>endereço</TableCellHeader>
              <TableCellHeader>cep</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listStudent.length && listStudent.map((row) => typeof row.Responsible === 'object' && typeof row.Address === 'object' && (
              <TableRow key={row.name}>
                <TableCellBody>{row.name}</TableCellBody>
                <TableCellBody>{row.email}</TableCellBody>
                <TableCellBody>{row.cpf}</TableCellBody>
                <TableCellBody>{row.rg}</TableCellBody>
                <TableCellBody>{row.age}</TableCellBody>
                <TableCellBody>{row.sex}</TableCellBody>
                <TableCellBody>{row.ethnicity}</TableCellBody>
                <TableCellBody>
                  {`${row.Responsible.parentesco} ${row.Responsible.name}`}
                </TableCellBody>
                <TableCellBody>
                  {`${row.Address.publicPlace}  ${row.Address.number}`}
                </TableCellBody>
                <TableCellBody>{row.Address.cep}</TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ReportStudentResponsibleAndAddress;
