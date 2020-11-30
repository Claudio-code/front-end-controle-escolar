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

import { getAllTeacherAction } from '../../store/modules/teacher/actions';
import { addTeacherDiscipline } from '../../store/modules/disipline/actions';
import { Container, ButtonUpdate } from '../../styles/global';
import {
  TableCellBody,
  TableCellHeader,
  TableHeader,
  Title,
} from './styles';

const ModalAddTeacher = ({ modalState, setModalState }) => {
  const dispatch = useDispatch();
  const teacherList = useSelector((state) => state.teacher.teacherList);
  const disipline = useSelector((state) => state.disipline.disipline);

  const handleClose = () => setModalState(!modalState);

  const handleAddTeacher = (item) => {
    dispatch(addTeacherDiscipline({ Discipline: disipline, Teacher: item }));
    dispatch(getAllTeacherAction());
    handleClose();
  };

  useEffect(() => {
    dispatch(getAllTeacherAction());
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
          <Title>Lista de Professores para adicionar na disiplina</Title>
          <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCellHeader>Nome</TableCellHeader>
                  <TableCellHeader>e-mail</TableCellHeader>
                  <TableCellHeader>cpf</TableCellHeader>
                  <TableCellHeader>rg</TableCellHeader>
                  <TableCellHeader>idade</TableCellHeader>
                  <TableCellHeader>titulo academico</TableCellHeader>
                  <TableCellHeader>Opções</TableCellHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teacherList.length && teacherList.map((item) => (
                  <TableRow key={item.name}>
                    <TableCellBody>{item.name}</TableCellBody>
                    <TableCellBody>{item.email}</TableCellBody>
                    <TableCellBody>{item.cpf}</TableCellBody>
                    <TableCellBody>{item.rg}</TableCellBody>
                    <TableCellBody>{item.age}</TableCellBody>
                    <TableCellBody>{item.academicTitle}</TableCellBody>
                    <TableCellBody>
                      <ButtonUpdate onClick={() => handleAddTeacher(item)}>
                        <Add />
                      </ButtonUpdate>
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

ModalAddTeacher.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalAddTeacher;
