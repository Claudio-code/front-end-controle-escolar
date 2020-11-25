import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TableBody,
  TableContainer,
  TableRow,
  Table,
  Paper,
} from '@material-ui/core';
import {
  Update,
  Delete,
  DoneAll,
  HighlightOff,
} from '@material-ui/icons';

import ModalUpdateTopic from '../../components/ModalUpdateTopic';
import { getAllTopics, setOneTopic, deleteTopic } from '../../store/modules/topics/actions';
import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  Title,
  ContainerTable,
} from './styles';

const UpdateTopics = () => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const topicsList = useSelector((state) => state.topics.topicList);

  useEffect(() => {
    dispatch(getAllTopics());
  }, []);

  const handleUpdate = (item) => {
    dispatch(setOneTopic(item));
    setModalState(true);
  };

  const handleDelete = (item) => {
    dispatch(deleteTopic(item.id));
    dispatch(getAllTopics());
  };

  return (
    <ContainerTable>
      <Title>Lista dos Topicos das Disiplinas</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCellHeader>Nome</TableCellHeader>
              <TableCellHeader>Descrição</TableCellHeader>
              <TableCellHeader>carga horaria</TableCellHeader>
              <TableCellHeader>Status</TableCellHeader>
              <TableCellHeader>Opções</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topicsList.length && topicsList.map((item) => (
              <TableRow key={item.name}>
                <TableCellBody>{ item.name }</TableCellBody>
                <TableCellBody>{ item.description }</TableCellBody>
                <TableCellBody>{ `${item.amountHours} horas` }</TableCellBody>
                <TableCellBody>{item.status ? (<DoneAll />) : (<HighlightOff />)}</TableCellBody>
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
      <ModalUpdateTopic
        modalState={modalState}
        setModalState={setModalState}
      />
    </ContainerTable>
  );
};

export default UpdateTopics;
