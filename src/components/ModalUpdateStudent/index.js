import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Fade, Backdrop, Dialog } from '@material-ui/core';
import { toast } from 'react-toastify';

import FormStudent from '../FormStudent';
import Student from '../../domain/Student';

import ListAddress from '../ListAddress';
import ListResponsibles from '../ListResponsibles';
import ModalUpdateResponsible from '../ModalUpdateResponsible';
import ModalStudentAddress from '../ModalStudentAddress';

import {
  Container,
  ButtonSucess,
  ButtonUpdate,
  ContainerButtons,
} from '../../styles/global';
import { ContainerRegister } from './styles';

import { updateStudent, getAllStudentsAction } from '../../store/modules/student/actions';

function ModalUpdateStudent({ modalState, setModalState }) {
  const dispatch = useDispatch();
  const [modalAddressState, setModalAddressState] = useState(false);
  const [modalResponsibleState, setModalResponsibleState] = useState(false);
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

  const student = useSelector((state) => state.student.student);
  const handleClose = () => setModalState(!modalState);

  useEffect(() => {
    function setParams() {
      if (!student) {
        return;
      }

      setName(student.name);
      setEmail(student.email);
      setCnh(student.cnh);
      setCpf(student.cpf);
      setRg(student.rg);
      setAge(student.age);
      setSex(student.sex);
      setEthnicity(student.ethnicity);
    }

    setParams();
  }, [student]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const studentRes = Student.validateAllData([
      name, email, rg, cpf, cnh, age, ethnicity, sex,
    ]);

    if (nameStatus || emailStatus || ageStatus || rgStatus || cpfStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }

    if (!studentRes) {
      return toast.error('Preencha os campos corretamete.');
    }

    const Newstudent = new Student(
      name, email, rg, cpf, cnh,
      age, ethnicity, sex,
    );
    Newstudent.setId(student.id);

    dispatch(updateStudent(Newstudent));
    dispatch(getAllStudentsAction());
    handleClose();
  };

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
            <ContainerButtons>
              <ButtonSucess type="submit">
                Atualizar
              </ButtonSucess>
            </ContainerButtons>
          </form>
          {student && student.Addresses && student.Addresses.length >= 0 ? (
            <ListAddress />
          ) : (
            <ContainerRegister>
              <ButtonUpdate onClick={() => setModalAddressState(true)}>
                Cadastrar Endereço
              </ButtonUpdate>
            </ContainerRegister>
          )}

          {student && student.Responsibles.length > 0 ? (
            <ListResponsibles />
          ) : (
            <ContainerRegister>
              <ButtonUpdate onClick={() => setModalResponsibleState(true)}>
                Cadastrar Responsavel
              </ButtonUpdate>
            </ContainerRegister>
          )}
          <ModalUpdateResponsible
            modalState={modalResponsibleState}
            setModalState={setModalResponsibleState}
          />
          <ModalStudentAddress
            modalState={modalAddressState}
            setModalState={setModalAddressState}
          />
        </Container>
      </Fade>
    </Dialog>
  );
}

ModalUpdateStudent.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalUpdateStudent;
