import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ButtonUpdate, Container } from '../../styles/global';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
} from './styles';

import {
  getAllMatriculation,
} from '../../store/modules/matriculation/actions';

function ReportMatriculation() {
  const dispatch = useDispatch();
  const matriculationList = useSelector((state) => state.matriculation.matriculationList);

  console.log(matriculationList);

  useEffect(() => {
    dispatch(getAllMatriculation());
  }, []);

  return (
    <Container>
      <Title>relatorio de estudantes matriculados</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5' }}>
        <Table aria-label="customized table">
          <TableHeader>
            <TableRow>
              <TableCellHeader>Ra</TableCellHeader>
              <TableCellHeader>Nome</TableCellHeader>
              <TableCellHeader>e-mail</TableCellHeader>
              <TableCellHeader>cpf</TableCellHeader>
              <TableCellHeader>rg</TableCellHeader>
              <TableCellHeader>idade</TableCellHeader>
              <TableCellHeader>Sexo</TableCellHeader>
              <TableCellHeader>Etnia</TableCellHeader>
              <TableCellHeader>Turma</TableCellHeader>
              <TableCellHeader>Curso</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matriculationList.length && matriculationList.map((row) => (
              <TableRow key={row.student.name}>
                <TableCellBody>{row.academicRecord}</TableCellBody>
                <TableCellBody>{row.student.name}</TableCellBody>
                <TableCellBody>{row.student.email}</TableCellBody>
                <TableCellBody>{row.student.cpf}</TableCellBody>
                <TableCellBody>{row.student.rg}</TableCellBody>
                <TableCellBody>{row.student.age}</TableCellBody>
                <TableCellBody>{row.student.sex}</TableCellBody>
                <TableCellBody>{row.student.ethnicity}</TableCellBody>
                <TableCellBody>{row.classe.className}</TableCellBody>
                <TableCellBody>{row.classe.course.courseName}</TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ReportMatriculation;
