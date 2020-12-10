import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Update, Delete } from '@material-ui/icons';
import ModalUpdateCourse from '../../components/ModalUpdateCourse';
import { getAllCourse, deleteCourse, setOneCourse } from '../../store/modules/course/actions';
import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
  ContainerTable,
} from './styles';

const UpdateCourse = () => {
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
    setModalState(true);
  };

  const handleDelete = (item) => {
    dispatch(deleteCourse(item.id));
    dispatch(getAllCourse());
  };

  return (
    <ContainerTable>
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
            {coursesData && coursesData.length && coursesData.map((item) => (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.description }</TableCellBody>
                <TableCellBody>{ `${item.totalAmountHours} horas` }</TableCellBody>
                <TableCellBody>
                  <ButtonUpdate onClick={() => handleUpdate(item)}>
                    <Update />
                  </ButtonUpdate>
                  <ButtonError onClick={() => handleDelete(item)}>
                    <Delete />
                  </ButtonError>
                </TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalUpdateCourse
        modalState={modalState}
        setModalState={setModalState}
      />
    </ContainerTable>
  );
};

export default UpdateCourse;
