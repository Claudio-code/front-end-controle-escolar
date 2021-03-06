import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Update, Delete, DoneAll, HighlightOff,
} from '@material-ui/icons';

import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
  ContainerTable,
} from './styles';

import {
  deleteDiscipline,
  getAllDisciplines,
  setOneDiscipline,
} from '../../store/modules/disipline/actions';
import ModalUpdateDisipline from '../../components/ModalUpdateDisipline';

const UpdateDiscipline = () => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [disciplinesData, setDisciplinesData] = useState([]);
  const disciplineList = useSelector((state) => state.disipline.disiplineList);

  useEffect(() => {
    dispatch(getAllDisciplines());
  }, []);

  useEffect(() => {
    setDisciplinesData(disciplineList);
  }, [disciplineList]);

  useEffect(() => {
    dispatch(getAllDisciplines());
  }, [modalState]);

  const handleUpdate = (item) => {
    dispatch(setOneDiscipline(item));
    setModalState(true);
  };

  const handleDelete = (item) => {
    dispatch(deleteDiscipline(item.id));
    dispatch(getAllDisciplines());
  };

  return (
    <ContainerTable>
      <Title>Lista das Disiplinas</Title>
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
            {disciplinesData && disciplinesData.length && disciplinesData.map((item) => (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.description }</TableCellBody>
                <TableCellBody>{ `${item.amountHours} horas` }</TableCellBody>
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
      <ModalUpdateDisipline
        modalState={modalState}
        setModalState={setModalState}
      />
    </ContainerTable>
  );
};

export default UpdateDiscipline;
