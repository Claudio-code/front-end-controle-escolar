import React, { useState, useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Fade, Backdrop } from '@material-ui/core';

import FormStudent from '../FormStudent';
import AddressForm from '../AddressForm';
import FormResponsible from '../FormResponsible';

import ListAddress from '../ListAddress';

import { Container } from '../../styles/global';

function ModalUpdateStudent({ modalState, setModalState }) {
  const dispacth = useDispatch();
  const student = useSelector((state) => state.student.student);
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

  const handleClose = () => setModalState(!modalState);

  useEffect(() => {
    function setParams() {
      if (!student) {
        return false;
      }

      setName(student.name);
      setEmail(student.email);
      setCnh(student.cnh);
      setCpf(student.cpf);
      setRg(student.rg);
      setAge(student.age);
      setSex(student.sex);
      setEthnicity(student.ethnicity);
      console.log(student);
    }

    setParams();
  }, [student]);

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
            title="Editar Aluno"
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
          {student && student.Addresses.length !== 0 ? (
            <ListAddress addresses={student.Addresses} />
          ) : (
            <div>cadastrar</div>
          )}
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
