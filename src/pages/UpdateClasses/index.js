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
import ModalUpdateClasse from '../../components/ModalUpdateClasse';

const UpdateClasses = () => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [classeData, setClasseData] = useState([]);
  const classesList = useSelector((state) => state.classes.classesList);

  useEffect(() => {
    dispatch(getAllClasse());
  }, []);

  useEffect(() => {
    dispatch(getAllClasse());
  }, [modalState]);

  useEffect(() => {
    setClasseData(classesList);
  }, [classesList]);

  const handleUpdate = (item) => {
    dispatch(setOneClasse(item));
    setModalState(true);
  };

  const handleDelete = (item) => {
    dispatch(deleteClasse(item.id));
    setTimeout(() => {
      dispatch(getAllClasse());
    }, 700);
  };

  return (
    <ContainerTable>
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
            {classeData && classeData.length && classeData.map((item) => (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.numberStudents }</TableCellBody>
                <TableCellBody>{ item.maximumStudents }</TableCellBody>
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
      <ModalUpdateClasse
        modalState={modalState}
        setModalState={setModalState}
      />
    </ContainerTable>
  );
};

export default UpdateClasses;
