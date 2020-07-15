import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Fade, Backdrop, Dialog } from '@material-ui/core';
import { toast } from 'react-toastify';

import AddressForm from '../AddressForm';
import Address from '../../domain/Address';

import { Title } from './styles';
import {
  Container,
  ButtonSucess,
  ContainerButtons,
} from '../../styles/global';

import {
  updateAddress,
  createAddress,
  getOneStudentWithAllResponsibleAndAddressAction,
} from '../../store/modules/student/actions';

function ModalStudentAddress({ modalState, setModalState, addressData }) {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const [cepStudent, setCepStudent] = useState('');
  const [cityStudent, setCityStudent] = useState('');
  const [countryStudent, setCountryStudent] = useState('');
  const [numberStudent, setNumberStudent] = useState('');
  const [publicPlaceStudent, setPublicPlaceStudent] = useState('');

  const [cepStudentStatus, setCepStudentStatus] = useState(false);
  const [cityStudentStatus, setCityStudentStatus] = useState(false);
  const [countryStudentStatus, setCountryStudentStatus] = useState(false);
  const [numberStudentStatus, setNumberStudentStatus] = useState(false);
  const [publicPlaceStudentStatus, setPublicPlaceStudentStatus] = useState(false);
  const handleClose = () => setModalState(!modalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const addressRes = Address.validateAllData([
      cityStudent, cepStudent, countryStudent,
      publicPlaceStudent, numberStudent,
    ]);

    if (cityStudentStatus || cepStudentStatus || countryStudentStatus
      || publicPlaceStudentStatus || numberStudentStatus) {
      return toast.error('Os dados do Formulário do endereço aluno estão errados.');
    }

    if (!addressRes) {
      return toast.error('Preencha os campos corretamente.');
    }

    const newAddress = new Address(
      cityStudent, cepStudent, countryStudent,
      publicPlaceStudent, numberStudent,
    );
    newAddress.setStudentId(student.id);

    dispatch(getOneStudentWithAllResponsibleAndAddressAction(
      student.id,
    ));

    if (addressData) {
      newAddress.setId(addressData.id);
      dispatch(updateAddress(newAddress));
    }

    if (!addressData) {
      dispatch(createAddress(newAddress));
    }

    handleClose();
  };

  useEffect(() => {
    if (addressData) {
      setCepStudent(addressData.cep);
      setCityStudent(addressData.city);
      setNumberStudent(addressData.number);
      setPublicPlaceStudent(addressData.public_place);
      setCountryStudent(addressData.country);
    }
  }, [addressData]);

  return (
    <Dialog
      open={modalState}
      onClose={handleClose}
      scroll="paper"
      maxWidth="xl"
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={modalState}>
        <Container>
          <form onSubmit={handleSubmit}>
            {addressData === null ? (
              <Title>Cadastrar endereço</Title>
            ) : (
              <Title>Editar endereço</Title>
            )}
            <AddressForm
              cep={cepStudent}
              setCep={setCepStudent}
              cepStatus={cepStudentStatus}
              setCepStatus={setCepStudentStatus}
              city={cityStudent}
              setCity={setCityStudent}
              cityStatus={cityStudentStatus}
              setCityStatus={setCityStudentStatus}
              number={numberStudent}
              setNumber={setNumberStudent}
              numberStatus={numberStudentStatus}
              setNumberStatus={setNumberStudentStatus}
              country={countryStudent}
              setCountry={setCountryStudent}
              countryStatus={countryStudentStatus}
              setCountryStatus={setCountryStudentStatus}
              publicPlace={publicPlaceStudent}
              setPublicPlace={setPublicPlaceStudent}
              publicPlaceStatus={publicPlaceStudentStatus}
              setPublicPlaceStatus={setPublicPlaceStudentStatus}
            />
            <ContainerButtons>
              <ButtonSucess type="submit">
                {addressData === null ? 'Cadastrar' : 'Atualizar'}
              </ButtonSucess>
            </ContainerButtons>
          </form>
        </Container>
      </Fade>
    </Dialog>
  );
}

ModalStudentAddress.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
  addressData: PropTypes.objectOf(PropTypes.any),
};

ModalStudentAddress.defaultProps = {
  addressData: null,
};

export default ModalStudentAddress;
