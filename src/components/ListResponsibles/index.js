/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import Responsible from '../../domain/Responsible';

import {
  updateResponsible,
  getOneStudentWithAllResponsibleAndAddressAction,
} from '../../store/modules/student/actions';

function ListResponsibles() {
  const dispatch = useDispatch();
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

  const updateStateResponsible = (responsible) => {
    const newResponsible = new Responsible(
      responsible.name,
      responsible.email,
      responsible.rg,
      responsible.cpf,
      responsible.kinship,
      !responsible.status,
    );
    newResponsible.setId(responsible.id);
    newResponsible.setStudentId(responsible.student_id);

    dispatch(updateResponsible(newResponsible));
    dispatch(getOneStudentWithAllResponsibleAndAddressAction(
      responsible.student_id,
    ));
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
            {responsiblesData.length > 0 && responsiblesData.map((row) => (
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
                  <ButtonError onClick={() => updateStateResponsible(row)}>
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
