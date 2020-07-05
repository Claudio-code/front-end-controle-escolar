import React, { useState, useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Fade, Backdrop } from '@material-ui/core';

import FormStudent from '../FormStudent';
import AddressForm from '../AddressForm';
import FormResponsible from '../FormResponsible';


import { Container } from '../../styles/global';

function ModalUpdateStudent({ modalState, setModalState }) {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);
  const [rgStatus, setRgStatus] = useState(false);
  const [cpfStatus, setCpfStatus] = useState(false);

  const [nameResponsible, setNameResponsible] = useState('');
  const [emailResponsible, setEmailResponsible] = useState('');
  const [kinshipResponsible, setKinshipResponsible] = useState('');
  const [cpfResponsible, setCpfResponsible] = useState('');
  const [rgResponsible, setRgResponsible] = useState('');

  const [nameStatusResponsible, setNameStatusResponsible] = useState(false);
  const [emailStatusResponsible, setEmailStatusResponsible] = useState(false);
  const [cpfStatusResponsible, setCpfStatusResponsible] = useState(false);
  const [rgStatusResponsible, setRgStatusResponsible] = useState(false);

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

  return (
    <Modal
      open={modalState}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={modalState}>
        <Container>
          <FormStudent
            title="Cadastro Completo de Aluno"
            name={name}
            setName={setName}
            nameStatus={nameStatus}
            setNameStatus={setNameStatus}
            email={email}
            setEmail={setEmail}
            emailStatus={emailStatus}
            setEmailStatus={setEmailStatus}
            cnh={cnh}
            setCnh={setCnh}
            cpf={cpf}
            setCpf={setCpf}
            cpfStatus={cpfStatus}
            setCpfStatus={setCpfStatus}
            rg={rg}
            setRg={setRg}
            rgStatus={rgStatus}
            setRgStatus={setRgStatus}
            age={age}
            setAge={setAge}
            ageStatus={ageStatus}
            setAgeStatus={setAgeStatus}
            ethnicity={ethnicity}
            setEthnicity={setEthnicity}
            sex={sex}
            setSex={setSex}
          />
        </Container>
      </Fade>

    </Modal>
  );
}

ModalUpdateStudent.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalUpdateStudent;
