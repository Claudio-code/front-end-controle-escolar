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
  getOneStudentWithAllResponsibleAndAddressAction,
  deleteStudent,
} from '../../store/modules/student/actions';

import { Container, ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader, TableCellHeader, TableCellBody, Title,
} from './styles';

const UpdateStudent = () => {
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

  const handleDelete = (student) => {
    dispatch(deleteStudent(student.id));
    dispatch(getAllStudentsAction());
  };

  return (
    <Container>
      {listStudent && listStudent.length > 0 ? (
        <>
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
                  <TableCellHeader>Opções</TableCellHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listStudent.length && listStudent.map((row) => (
                  <TableRow key={row.name}>
                    <TableCellBody>{row.name}</TableCellBody>
                    <TableCellBody>{row.email}</TableCellBody>
                    <TableCellBody>{row.cpf}</TableCellBody>
                    <TableCellBody>{row.rg}</TableCellBody>
                    <TableCellBody>{row.age}</TableCellBody>
                    <TableCellBody>{row.sex}</TableCellBody>
                    <TableCellBody>{row.ethnicity}</TableCellBody>
                    <TableCellBody>
                      <ButtonUpdate onClick={() => openModalUpdateStudent(row)}>
                        <Update />
                      </ButtonUpdate>
                      <ButtonError onClick={() => handleDelete(row)}>
                        <Delete />
                      </ButtonError>
                    </TableCellBody>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <ButtonUpdate onClick={() => history.push('/Alunos/FormularioCompleto')}>
          Cadastrar um Estudante
        </ButtonUpdate>
      )}
      <ModalUpdateStudent
        modalState={modalState}
        setModalState={setModalState}
      />
    </Container>
  );
};

export default UpdateStudent;
