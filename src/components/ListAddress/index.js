/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Update, Delete, DoneAll, HighlightOff } from '@material-ui/icons';

import { ButtonUpdate, ButtonError } from '../../styles/global';
import {
  TableHeader, TableCellHeader, TableCellBody, Title, Container,
} from './styles';

function ListAddress({ addresses }) {
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
            {addresses && addresses.map((row) => (
              <TableRow key={row.cep}>
                <TableCellBody>{row.city}</TableCellBody>
                <TableCellBody>{row.country}</TableCellBody>
                <TableCellBody>{row.public_place}</TableCellBody>
                <TableCellBody>{row.number}</TableCellBody>
                <TableCellBody>{row.cep}</TableCellBody>
                <TableCellBody>{row.status ? (<DoneAll />) : (<HighlightOff />)}</TableCellBody>
                <TableCellBody>
                  <ButtonUpdate onClick={() => {}}>
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
    </Container>
  );
}

ListAddress.propTypes = {
  addresses: PropTypes.array.isRequired,
};

export default ListAddress;
