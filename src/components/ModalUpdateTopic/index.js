import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Fade, Backdrop, Dialog } from '@material-ui/core';
import { toast } from 'react-toastify';

import {
  Container,
  ButtonSucess,
  ButtonGoBack,
  ContainerButtons,
} from '../../styles/global';
import { getAllTopics, updateTopic } from '../../store/modules/topics/actions';
import FormTopics from '../FormTopics';
import Topics from '../../domain/Topics';

const ModalUpdateTopic = ({ modalState, setModalState }) => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amountHours, setAmountHours] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [descriptionStatus, setDescriptionStatus] = useState(false);
  const [amountHoursStatus, setAmountHoursStatus] = useState(false);

  const topic = useSelector((state) => state.topics.topic);

  const handleClose = () => setModalState(!modalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const topicsRes = Topics.validateAllData([
      name, description, amountHours,
    ]);

    if (nameStatus || descriptionStatus || amountHoursStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }
    if (!topicsRes) {
      return toast.error('Preencha os campos corretamente¹');
    }

    const newTopic = new Topics(name, description, amountHours);
    newTopic.setId(topic.id);

    dispacth(updateTopic(newTopic));
    dispacth(getAllTopics());
    handleClose();
  };

  useEffect(() => {
    function setParams() {
      if (!topic) {
        return;
      }

      setName(topic.name);
      setDescription(topic.description);
      setAmountHours(String(topic.amountHours));
    }

    setParams();
  }, [topic]);

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
            <FormTopics
              title="Editar o topico da disiplina"
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

ModalUpdateTopic.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalUpdateTopic;
