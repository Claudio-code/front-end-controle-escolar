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

import ModalStudentAddress from '../ModalStudentAddress';

import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader, TableCellHeader, TableCellBody, Title, Container,
} from './styles';

import Address from '../../domain/Address';

import {
  updateAddress,
  getOneStudentWithAllResponsibleAndAddressAction,
} from '../../store/modules/student/actions';


function ListAddress() {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [addressData, setAddressData] = useState(null);
  const [addressesData, setAddressesData] = useState([]);
  const student = useSelector((state) => state.student.student);

  useEffect(() => {
    setAddressesData(student.Addresses);
  }, [student]);

  const openModalUpdateAddress = (addressRow) => {
    setAddressData(addressRow);
    setModalState(!modalState);
  };

  const updateStateAddress = (address) => {
    const newAddress = new Address(
      address.city,
      address.cep,
      address.country,
      address.public_place,
      address.number,
      !address.status,
    );
    newAddress.setId(address.id);
    newAddress.setStudentId(address.student_id);

    dispatch(updateAddress(newAddress));
    dispatch(getOneStudentWithAllResponsibleAndAddressAction(
      address.student_id,
    ));

    return newAddress;
  };

  return (
    <Container>
      <Title>Lista de Endereços</Title>
      <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5' }}>
        <Table aria-label="customized table">
          <TableHeader>
            <TableRow>
              <TableCellHeader>city</TableCellHeader>
              <TableCellHeader>country</TableCellHeader>
              <TableCellHeader>public_place</TableCellHeader>
              <TableCellHeader>number</TableCellHeader>
              <TableCellHeader>cep</TableCellHeader>
              <TableCellHeader>status</TableCellHeader>
              <TableCellHeader>Opções</TableCellHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {addressesData.map((row) => (
              <TableRow key={row.cep}>
                <TableCellBody>{row.city}</TableCellBody>
                <TableCellBody>{row.country}</TableCellBody>
                <TableCellBody>{row.public_place}</TableCellBody>
                <TableCellBody>{row.number}</TableCellBody>
                <TableCellBody>{row.cep}</TableCellBody>
                <TableCellBody>{row.status ? (<DoneAll />) : (<HighlightOff />)}</TableCellBody>
                <TableCellBody>
                  <ButtonUpdate onClick={() => openModalUpdateAddress(row)}>
                    <Update />
                  </ButtonUpdate>
                  <ButtonError onClick={() => updateStateAddress(row)}>
                    <Delete />
                  </ButtonError>
                </TableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalStudentAddress
        addressData={addressData}
        modalState={modalState}
        setModalState={setModalState}
      />
    </Container>
  );
}

export default ListAddress;