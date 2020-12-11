import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllCourse } from '../../store/modules/course/actions';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
  ContainerTable,
} from './styles';

function ReportTeachersCoordenation() {
  const dispatch = useDispatch();
  const coursesList = useSelector((state) => state.course.courseList);

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);
  console.log(coursesList);
  return (
    <ContainerTable>
      <Title>Relatorio profesores com que são coordenadores</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
        <TableHeader>
          <TableRow>
            <TableCellHeader>Nome</TableCellHeader>
            <TableCellHeader>e-mail</TableCellHeader>
            <TableCellHeader>cpf</TableCellHeader>
            <TableCellHeader>rg</TableCellHeader>
            <TableCellHeader>idade</TableCellHeader>
            <TableCellHeader>titulo academico</TableCellHeader>
            <TableCellHeader>nome do curso</TableCellHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coursesList.length && coursesList.map((item) => item.coordinator && (
            <TableRow key={item.name}>
              <TableCellBody>{item.coordinator.name}</TableCellBody>
              <TableCellBody>{item.coordinator.email}</TableCellBody>
              <TableCellBody>{item.coordinator.cpf}</TableCellBody>
              <TableCellBody>{item.coordinator.rg}</TableCellBody>
              <TableCellBody>{item.coordinator.age}</TableCellBody>
              <TableCellBody>{item.coordinator.academicTitle}</TableCellBody>
              <TableCellBody>
                {item.name}
              </TableCellBody>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>

    </ContainerTable>
  );
}

export default ReportTeachersCoordenation;
