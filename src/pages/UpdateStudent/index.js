import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Update, Delete } from '@material-ui/icons';

import ModalUpdateStudent from '../../components/ModalUpdateStudent';
import { getAllStudentsAction, getOneStudentWithAllResponsibleAndAddressAction } from '../../store/modules/student/actions';

import { Container, ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader, TableCellHeader, TableCellBody, Title,
} from './styles';

function UpdateStudent() {
  const dispatch = useDispatch();
  const listStudent = useSelector((state) => state.student.studentsList);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    dispatch(getAllStudentsAction());
  }, []);

  const openModalUpdateStudent = (student) => {
    dispatch(getOneStudentWithAllResponsibleAndAddressAction(student.id));
    setModalState(!modalState);
  };

  const deleteStudent = (student) => {
    console.log(student.status.type.displayName);
  };

  return (
    <Container>
      <Title>Lista de estudantes</Title>
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
              <TableCellHeader>Status</TableCellHeader>
              <TableCellHeader>Opções</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listStudent && listStudent.map((row) => (
              <TableRow key={row.name}>
                <TableCellBody>{row.name}</TableCellBody>
                <TableCellBody>{row.email}</TableCellBody>
                <TableCellBody>{row.cpf}</TableCellBody>
                <TableCellBody>{row.rg}</TableCellBody>
                <TableCellBody>{row.age}</TableCellBody>
                <TableCellBody>{row.sex}</TableCellBody>
                <TableCellBody>{row.ethnicity}</TableCellBody>
                <TableCellBody>{row.status}</TableCellBody>
                <TableCellBody>
                  <ButtonUpdate onClick={() => openModalUpdateStudent(row)}>
                    <Update />
                  </ButtonUpdate>
                  <ButtonError onClick={() => deleteStudent(row)}>
                    <Delete />
                  </ButtonError>
                </TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalUpdateStudent
        modalState={modalState}
        setModalState={setModalState}
      />
    </Container>
  );
}

export default UpdateStudent;
