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
import { getAllClasse, updateClasse } from '../../store/modules/classes/actions';

import FormClasses from '../FormClasses';
import Classes from '../../domain/Classes';

const ModalUpdateClasse = ({ modalState, setModalState }) => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [maximumStudents, setMaximumStudents] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [maximumStudentsStatus, setMaximumStudentsStatus] = useState(false);

  const handleClose = () => setModalState(!modalState);

  const classes = useSelector((state) => state.classes.classes);

  const handleSubmit = (event) => {
    event.preventDefault();
    const classeRes = Classes.validateAllData([
      name, maximumStudents,
    ]);

    if (nameStatus || maximumStudentsStatus) {
      return toast.error('Os dados do Formulario da disiplina estão errados.');
    }
    if (!classeRes) {
      return toast.error('Preencha os campos corretamente¹');
    }

    const newClasse = new Classes(name, maximumStudents, classes.id, classes.numberStudents);
    dispacth(updateClasse(newClasse));
    dispacth(getAllClasse());
    handleClose();
  };

  useEffect(() => {
    function setParams() {
      if (!classes) {
        return;
      }

      setName(classes.name);
      setMaximumStudents(String(classes.maximumStudents));
    }

    setParams();
  }, [classes]);

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
            <FormClasses
              title="Cadastro de Turma"
              name={name}
              setName={setName}
              nameStatus={nameStatus}
              setNameStatus={setNameStatus}
              maximumStudents={maximumStudents}
              setMaximumStudents={setMaximumStudents}
              maximumStudentsStatus={maximumStudentsStatus}
              setMaximumStudentsStatus={setMaximumStudentsStatus}
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

ModalUpdateClasse.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalUpdateClasse;
