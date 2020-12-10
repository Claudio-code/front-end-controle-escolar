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
import { getAllCourse, setOneCourse } from '../../store/modules/course/actions';
import ModalAddCoordinator from '../../components/ModalAddCoordinator';

// import { Container } from './styles';

const AddCoordinatorCourse = () => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const coursesList = useSelector((state) => state.course.courseList);

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [modalState]);

  useEffect(() => {
    setCoursesData(coursesList);
  }, [coursesList]);

  const handleUpdate = (item) => {
    dispatch(setOneCourse(item));
    setModalState(!modalState);
  };

  return (
    <Container>
      <Title>Lista de cursos</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCellHeader>Nome</TableCellHeader>
              <TableCellHeader>Descrição</TableCellHeader>
              <TableCellHeader>carga horaria</TableCellHeader>
              <TableCellHeader>Nome do Professor</TableCellHeader>
              <TableCellHeader>Opções</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coursesData && coursesData.length && coursesData.map((item) => (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.description }</TableCellBody>
                <TableCellBody>{ `${item.amountHours} horas` }</TableCellBody>
                <TableCellBody>{ item.coordinator ? `${item.coordinator.academicTitle} ${item.coordinator.name}` : 'Não há coordenador' }</TableCellBody>
                <TableCellBody>
                  <ButtonUpdate onClick={() => handleUpdate(item)}>
                    Adicionar Professor
                  </ButtonUpdate>
                </TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalAddCoordinator
        modalState={modalState}
        setModalState={setModalState}
      />
    </Container>
  );
};

export default AddCoordinatorCourse;
