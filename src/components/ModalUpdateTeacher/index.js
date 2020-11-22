import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Fade, Backdrop, Dialog } from '@material-ui/core';
import { toast } from 'react-toastify';

import Teacher from '../../domain/Teacher';
import FormTeacher from '../FormTeacher';
import { updateTeacher, getAllTeacherAction } from '../../store/modules/teacher/actions';

import {
  Container,
  ButtonSucess,
  ButtonGoBack,
  ContainerButtons,
} from '../../styles/global';

const ModalUpdateTeacher = ({ modalState, setModalState }) => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cnh, setCnh] = useState('');
  const [age, setAge] = useState('');
  const [academicTitle, setAcademicTitle] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [cpfStatus, setCpfStatus] = useState(false);
  const [rgStatus, setRgStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);

  const teacher = useSelector((state) => state.teacher.teacher);

  const handleClose = () => setModalState(!modalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const teacherRes = Teacher.validateAllData([
      name, email, rg, cpf, cnh, age, academicTitle,
    ]);

    if (nameStatus || emailStatus || ageStatus || rgStatus || cpfStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }
    if (!teacherRes) {
      return toast.error('Preencha os campos corretamente¹');
    }
    const newTeacher = new Teacher(
      name, email, rg, cpf, cnh, age, academicTitle,
    );

    newTeacher.setId(teacher.id);
    dispacth(updateTeacher(newTeacher));
    dispacth(getAllTeacherAction());
    handleClose();
  };

  useEffect(() => {
    function setParams() {
      if (!teacher) {
        return;
      }

      setName(teacher.name);
      setEmail(teacher.email);
      setCnh(teacher.cnh);
      setCpf(teacher.cpf);
      setRg(teacher.rg);
      setAge(teacher.age);
      setAcademicTitle(teacher.academicTitle);
    }

    setParams();
  }, [teacher]);

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
            <FormTeacher
              title="Editar Professor"
              name={name}
              setName={setName}
              nameStatus={nameStatus}
              setNameStatus={setNameStatus}
              email={email}
              setEmail={setEmail}
              emailStatus={emailStatus}
              setEmailStatus={setEmailStatus}
              cpf={cpf}
              setCpf={setCpf}
              cpfStatus={cpfStatus}
              setCpfStatus={setCpfStatus}
              rg={rg}
              setRg={setRg}
              rgStatus={rgStatus}
              setRgStatus={setRgStatus}
              cnh={cnh}
              setCnh={setCnh}
              age={age}
              setAge={setAge}
              ageStatus={ageStatus}
              setAgeStatus={setAgeStatus}
              academicTitle={academicTitle}
              setAcademicTitle={setAcademicTitle}
            />
            <ContainerButtons>
              <ButtonGoBack onClick={() => setModalState(!modalState)}>
                Voltar
              </ButtonGoBack>
              <ButtonSucess type="submit">
                Atualizar
              </ButtonSucess>
            </ContainerButtons>
          </form>
        </Container>
      </Fade>
    </Dialog>
  );
};

ModalUpdateTeacher.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalUpdateTeacher;
