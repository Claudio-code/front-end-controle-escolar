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
import FormDiscipline from '../FormDiscipline';
import Discipline from '../../domain/Discipline';
import {
  getAllDisciplines,
  updateDiscipline,
} from '../../store/modules/disipline/actions';

const ModalUpdateDisipline = ({ modalState, setModalState }) => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amountHours, setAmountHours] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [descriptionStatus, setDescriptionStatus] = useState(false);
  const [amountHoursStatus, setAmountHoursStatus] = useState(false);

  const disipline = useSelector((state) => state.disipline.disipline);

  const handleClose = () => setModalState(!modalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const disiplineRes = Discipline.validateAllData([
      name, description, amountHours,
    ]);

    if (nameStatus || descriptionStatus || amountHoursStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }
    if (!disiplineRes) {
      return toast.error('Preencha os campos corretamente¹');
    }

    const newDisipline = new Discipline(name, description, amountHours);
    newDisipline.setId(disipline.id);

    dispacth(updateDiscipline(newDisipline));
    dispacth(getAllDisciplines());
    handleClose();
  };

  useEffect(() => {
    function setParams() {
      if (!disipline) {
        return;
      }
      console.log(disipline)
      setName(disipline.name);
      setDescription(disipline.description);
      setAmountHours(String(disipline.amountHours));
    }

    setParams();
  }, [disipline]);

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
            <FormDiscipline
              title="Editar a disiplina"
              name={name}
              setName={setName}
              nameStatus={nameStatus}
              setNameStatus={setNameStatus}
              description={description}
              setDescription={setDescription}
              descriptionStatus={descriptionStatus}
              setDescriptionStatus={setDescriptionStatus}
              amountHours={amountHours}
              setAmountHours={setAmountHours}
              amountHoursStatus={amountHoursStatus}
              setAmountHoursStatus={setAmountHoursStatus}
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

ModalUpdateDisipline.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalUpdateDisipline;
