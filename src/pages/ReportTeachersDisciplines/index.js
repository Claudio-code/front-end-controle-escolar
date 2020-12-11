import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllDisciplines } from '../../store/modules/disipline/actions';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
  ContainerTable,
} from './styles';

function ReportTeachersDisciplines() {
  const dispatch = useDispatch();
  const disciplineList = useSelector((state) => state.disipline.disiplineList);

  useEffect(() => {
    dispatch(getAllDisciplines());
  }, []);

  return (
    <ContainerTable>
      <Title>Relatorio profesores com disiplinas</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
        <TableHeader>
          <TableRow>
            <TableCellHeader>Nome</TableCellHeader>
            <TableCellHeader>e-mail</TableCellHeader>
            <TableCellHeader>cpf</TableCellHeader>
            <TableCellHeader>rg</TableCellHeader>
            <TableCellHeader>idade</TableCellHeader>
            <TableCellHeader>titulo academico</TableCellHeader>
            <TableCellHeader>nome da disciplina</TableCellHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {disciplineList.length && disciplineList.map((item) => item.teacher && (
            <TableRow key={item.name}>
              <TableCellBody>{item.teacher.name}</TableCellBody>
              <TableCellBody>{item.teacher.email}</TableCellBody>
              <TableCellBody>{item.teacher.cpf}</TableCellBody>
              <TableCellBody>{item.teacher.rg}</TableCellBody>
              <TableCellBody>{item.teacher.age}</TableCellBody>
              <TableCellBody>{item.teacher.academicTitle}</TableCellBody>
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

export default ReportTeachersDisciplines;
