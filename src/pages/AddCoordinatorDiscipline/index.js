import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ButtonUpdate } from '../../styles/global';
import {
  TableHeader, TableCellHeader, TableCellBody, Title,
} from './styles';
import { getAllDisciplines, setOneDiscipline } from '../../store/modules/disipline/actions';
import { ContainerTable } from '../UpdateTopics/styles';
import ModalAddCoordinator from '../../components/ModalAddCoordinator';

const AddCoordinatorDiscipline = () => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [disciplinesData, setDisciplinesData] = useState([]);
  const disciplineList = useSelector((state) => state.disipline.disiplineList);

  const handleUpdate = (item) => {
    dispatch(setOneDiscipline(item));
    setModalState(!modalState);
  };

  useEffect(() => {
    dispatch(getAllDisciplines());
  }, []);

  useEffect(() => {
    setDisciplinesData(disciplineList);
  }, [disciplineList]);

  useEffect(() => {
    dispatch(getAllDisciplines());
  }, [modalState]);

  return (
    <ContainerTable>
      <Title>Lista de Disiplina para adicionar um Coordenador</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCellHeader>Nome</TableCellHeader>
              <TableCellHeader>Descrição</TableCellHeader>
              <TableCellHeader>carga horaria</TableCellHeader>
              <TableCellHeader>Nome do Coordenador</TableCellHeader>
              <TableCellHeader>Opções</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {disciplinesData && disciplinesData.length && disciplinesData.map((item) => (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.description }</TableCellBody>
                <TableCellBody>{ `${item.amountHours} horas` }</TableCellBody>
                <TableCellBody>{ item.coordinator ? `${item.coordinator.academicTitle} ${item.coordinator.name}` : 'Não há coordenador' }</TableCellBody>
                <TableCellBody>
                  <ButtonUpdate onClick={() => handleUpdate(item)}>
                    Adicionar Coordenador
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
    </ContainerTable>
  );
};

export default AddCoordinatorDiscipline;
