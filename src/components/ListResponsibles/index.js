/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Update, Delete, DoneAll, HighlightOff,
} from '@material-ui/icons';

import ModalUpdateResponsible from '../ModalUpdateResponsible';

import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader, TableCellHeader, TableCellBody, Title, Container,
} from './styles';

function ListResponsibles() {
  const [modalState, setModalState] = useState(false);
  const [responsiblesData, setResponsiblesData] = useState([]);
  const [responsibleData, setResponsibleData] = useState([]);
  const student = useSelector((state) => state.student.student);

  useEffect(() => {
    setResponsiblesData(student.Responsibles);
  }, [student]);

  const openModalUpdateResponsibles = (responsiblesRow) => {
    setResponsibleData(responsiblesRow);
    setModalState(!modalState);
  };


  return (
    <Container>
      <Title>Lista de Responsaveis</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5' }}>
        <Table aria-label="customized table">
          <TableHeader>
            <TableRow>
              <TableCellHeader>Nome</TableCellHeader>
              <TableCellHeader>e-mail</TableCellHeader>
              <TableCellHeader>parentesco</TableCellHeader>
              <TableCellHeader>cpf</TableCellHeader>
              <TableCellHeader>rg</TableCellHeader>
              <TableCellHeader>status</TableCellHeader>
              <TableCellHeader>Opções</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {responsiblesData.map((row) => (
              <TableRow key={row.id}>
                <TableCellBody>{row.name}</TableCellBody>
                <TableCellBody>{row.email}</TableCellBody>
                <TableCellBody>{row.kinship}</TableCellBody>
                <TableCellBody>{row.cpf}</TableCellBody>
                <TableCellBody>{row.rg}</TableCellBody>
                <TableCellBody>{row.status ? (<DoneAll />) : (<HighlightOff />)}</TableCellBody>
                <TableCellBody>
                  <ButtonUpdate onClick={() => openModalUpdateResponsibles(row)}>
                    <Update />
                  </ButtonUpdate>
                  <ButtonError onClick={() => {}}>
                    <Delete />
                  </ButtonError>
                </TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalUpdateResponsible
        modalState={modalState}
        setModalState={setModalState}
        responsibleData={responsibleData}
      />
    </Container>
  );
}

export default ListResponsibles;
