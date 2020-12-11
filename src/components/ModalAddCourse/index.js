import React, { useEffect, useState } from 'react';
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
import { getAllCourse } from '../../store/modules/course/actions';
import { addCourseInClasse } from '../../store/modules/classes/actions';
import Classes from '../../domain/Classes';

const ModalAddCourse = ({ modalState, setModalState }) => {
  const dispatch = useDispatch();
  const [coursesData, setCoursesData] = useState([]);
  const coursesList = useSelector((state) => state.course.courseList);
  const classes = useSelector((state) => state.classes.classes);

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [modalState]);

  useEffect(() => {
    setCoursesData(coursesList);
  }, [coursesList]);

  const handleAddCourse = (item) => {
    const newClasse = new Classes(
      classes.name,
      classes.maximumStudents,
      classes.id,
      classes.numberStudents,
    );
    newClasse.addCourse(item);
    dispatch(addCourseInClasse(newClasse));
    setModalState(!modalState);
  };

  return (
    <Dialog
      open={modalState}
      onClose={() => setModalState(!modalState)}
      scroll="paper"
      maxWidth="xl"
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={modalState}>
        <Container>
          <Title>Lista de Cursos</Title>
          <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCellHeader>Nome</TableCellHeader>
                  <TableCellHeader>Descrição</TableCellHeader>
                  <TableCellHeader>carga horaria</TableCellHeader>
                  <TableCellHeader>Opções</TableCellHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coursesData && coursesData.length && coursesData.map((item) => item.diciplines.length > 0 && (
                  <TableRow key={item.name}>
                    <TableCellBody>{ item.name }</TableCellBody>
                    <TableCellBody>{ item.description }</TableCellBody>
                    <TableCellBody>{ `${item.totalAmountHours} horas` }</TableCellBody>
                    <TableCellBody>
                      <ButtonUpdate onClick={() => handleAddCourse(item)}>
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

ModalAddCourse.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalAddCourse;
