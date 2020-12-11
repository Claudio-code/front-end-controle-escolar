import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  TableBody,
  TableContainer,
  TableRow,
  Paper,
  Table,
  Dialog,
  Fade,
  Backdrop,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { Container, ButtonUpdate } from '../../styles/global';
import {
  TableCellBody,
  TableCellHeader,
  TableHeader,
  Title,
} from './styles';
import { getAllTeacherAction } from '../../store/modules/teacher/actions';
import { getAllClasse } from '../../store/modules/classes/actions';
// import {  } from '..';

const ModalAddClasse = ({ modalState, setModalState }) => {
  const dispatch = useDispatch();
  const classesList = useSelector((state) => state.classes.classesList);

  const student = useSelector((state) => state.student.student);
  const handleClose = () => setModalState(!modalState);

  useEffect(() => {
    dispatch(getAllClasse());
  }, []);

  return (
    <Dialog
      open={modalState}
      onClose={handleClose}
      scroll="paper"
      maxWidth="xl"
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={modalState}>
        <Container>
          <Title>Lista de Classe</Title>
          <TableContainer
            component={Paper}
            style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCellHeader>Nome</TableCellHeader>
                  <TableCellHeader>Numero de alunos</TableCellHeader>
                  <TableCellHeader>Maximo de aluno permitido</TableCellHeader>
                  <TableCellHeader>Opções</TableCellHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classesList && classesList.length && classesList.map((item) => (
                  <TableRow key={item.name}>
                    <TableCellBody>{ item.name }</TableCellBody>
                    <TableCellBody>{ item.numberStudents }</TableCellBody>
                    <TableCellBody>{ item.maximumStudents }</TableCellBody>
                    <TableCellBody>
                      dw
                    </TableCellBody>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Fade>
    </Dialog>
  );
};

ModalAddClasse.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalAddClasse;
