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

function ReportCourseDisciplines() {
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

  return (
    <ContainerTable>
      <Title>relatorio de Curso com Disiplinas</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCellHeader>Nome</TableCellHeader>
              <TableCellHeader>Descrição</TableCellHeader>
              <TableCellHeader>carga horaria</TableCellHeader>
              <TableCellHeader>disiplinas do curso</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coursesData && coursesData.length && coursesData.map((item) => item.diciplines.length > 0 && (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.description }</TableCellBody>
                <TableCellBody>{ `${item.totalAmountHours} horas` }</TableCellBody>
                <TableCellBody>
                  {item.diciplines.map((row) => row.name).join(', ')}
                </TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerTable>
  );
}

export default ReportCourseDisciplines;
