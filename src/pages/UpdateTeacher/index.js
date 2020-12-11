import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Update, Delete, DoneAll, HighlightOff,
} from '@material-ui/icons';

import ModalUpdateTeacher from '../../components/ModalUpdateTeacher';
import { getOneTeacher, getAllTeacherAction, deleteTeacher } from '../../store/modules/teacher/actions';
import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
  ContainerTable,
} from './styles';

const UpdateTeacher = () => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const teacherList = useSelector((state) => state.teacher.teacherList);

  useEffect(() => {
    dispatch(getAllTeacherAction());
  }, []);

  useEffect(() => {
    dispatch(getAllTeacherAction());
  }, [modalState]);

  const handleDeleteTeacher = (item) => {
    dispatch(deleteTeacher(item.id));
    dispatch(getAllTeacherAction());
  };

  const handleUpdateTeacher = (item) => {
    dispatch(getOneTeacher(item.id));
    setModalState(true);
  };

  return (
    <ContainerTable>
      <Title>Lista de Professores</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
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
                <ButtonUpdate onClick={() => handleUpdateTeacher(item)}>
                  <Update />
                </ButtonUpdate>
                <ButtonError onClick={() => handleDeleteTeacher(item)}>
                  <Delete />
                </ButtonError>
              </TableCellBody>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <ModalUpdateTeacher
        modalState={modalState}
        setModalState={setModalState}
      />
    </ContainerTable>
  );
};

export default UpdateTeacher;
