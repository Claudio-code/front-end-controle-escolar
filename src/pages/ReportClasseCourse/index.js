import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Update, Delete } from '@material-ui/icons';
import { getAllClasse, deleteClasse, setOneClasse } from '../../store/modules/classes/actions';
import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
  ContainerTable,
} from './styles';

function ReportClasseCourse() {
  const dispatch = useDispatch();
  const [classeData, setClasseData] = useState([]);
  const classesList = useSelector((state) => state.classes.classesList);

  useEffect(() => {
    dispatch(getAllClasse());
  }, []);

  useEffect(() => {
    setClasseData(classesList);
  }, [classesList]);


  return (
    <ContainerTable>
      <Title>Relatorio de Turmas vinculadas a um curso</Title>
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
              <TableCellHeader>nome do curso</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classeData && classeData.length && classeData.map((item) => item.course && (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.numberStudents }</TableCellBody>
                <TableCellBody>{ item.maximumStudents }</TableCellBody>
                <TableCellBody>
                  {item.course.courseName}
                </TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerTable>
  );
}

export default ReportClasseCourse;
