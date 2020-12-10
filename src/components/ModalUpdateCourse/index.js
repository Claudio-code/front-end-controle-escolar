import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Fade, Backdrop, Dialog } from '@material-ui/core';
import { toast } from 'react-toastify';
import {
  ButtonGoBack,
  ButtonSucess,
  Container,
  ContainerButtons,
} from '../../styles/global';
import { getAllCourse, updateCourse } from '../../store/modules/course/actions';

import FormCourse from '../FormCourse';
import Course from '../../domain/Course';

const ModalUpdateCourse = ({ modalState, setModalState }) => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [totalAmountHours, setTotalAmountHours] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [descriptionStatus, setDescriptionStatus] = useState(false);
  const [totalAmountHoursStatus, setTotalAmountHoursStatus] = useState(false);

  const course = useSelector((state) => state.course.course);

  const handleClose = () => setModalState(!modalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const disiplineRes = Course.validateAllData([
      name, description, totalAmountHours,
    ]);

    if (nameStatus || descriptionStatus || totalAmountHoursStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }
    if (!disiplineRes) {
      return toast.error('Preencha os campos corretamente¹');
    }

    const newCourse = new Course(name, description, totalAmountHours, course.id);
    dispacth(updateCourse(newCourse));
    dispacth(getAllCourse());
    handleClose();
  };

  useEffect(() => {
    function setParams() {
      if (!course) {
        return;
      }

      setName(course.name);
      setDescription(course.description);
      setTotalAmountHours(String(course.totalAmountHours));
    }

    setParams();
  }, [course]);

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
            <FormCourse
              title="Editar o curso"
              name={name}
              setName={setName}
              nameStatus={nameStatus}
              setNameStatus={setNameStatus}
              description={description}
              setDescription={setDescription}
              descriptionStatus={descriptionStatus}
              setDescriptionStatus={setDescriptionStatus}
              totalAmountHours={totalAmountHours}
              setTotalAmountHours={setTotalAmountHours}
              totalAmountHoursStatus={totalAmountHoursStatus}
              setTotalAmountHoursStatus={setTotalAmountHoursStatus}
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

ModalUpdateCourse.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalUpdateCourse;
