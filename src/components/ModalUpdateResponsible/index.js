import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Fade, Backdrop, Dialog } from '@material-ui/core';
import { toast } from 'react-toastify';

import FormResponsible from '../FormResponsible';
import Responsible from '../../domain/Responsible';

import { Title } from './styles';
import {
  Container,
  ButtonSucess,
  ContainerButtons,
} from '../../styles/global';

import {
  updateResponsible,
  createResponsible,
  getOneStudentWithAllResponsibleAndAddressAction,
} from '../../store/modules/student/actions';

function ModalUpdateResponsible({ modalState, setModalState, responsibleData }) {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const [nameResponsible, setNameResponsible] = useState('');
  const [emailResponsible, setEmailResponsible] = useState('');
  const [kinshipResponsible, setKinshipResponsible] = useState('');
  const [cpfResponsible, setCpfResponsible] = useState('');
  const [rgResponsible, setRgResponsible] = useState('');

  const [nameStatusResponsible, setNameStatusResponsible] = useState(false);
  const [emailStatusResponsible, setEmailStatusResponsible] = useState(false);
  const [cpfStatusResponsible, setCpfStatusResponsible] = useState(false);
  const [rgStatusResponsible, setRgStatusResponsible] = useState(false);

  useEffect(() => {
    if (responsibleData) {
      setNameResponsible(responsibleData.name);
      setEmailResponsible(responsibleData.email);
      setKinshipResponsible(responsibleData.kinship);
      setCpfResponsible(responsibleData.cpf);
      setRgResponsible(responsibleData.rg);
    }
  }, [responsibleData]);

  const handleClose = () => setModalState(!modalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const responsibleRes = Responsible.validateAllData([
      nameResponsible, emailResponsible,
      rgResponsible, cpfResponsible, kinshipResponsible,
    ]);

    if (nameStatusResponsible || emailStatusResponsible
      || rgStatusResponsible || cpfStatusResponsible) {
      return toast.error('Os dados do Formulário do responsável aluno estão errados.');
    }

    if (!responsibleRes) {
      return toast.error('Preencha os campos corretamente.');
    }

    const newResponsible = new Responsible(
      nameResponsible, emailResponsible, rgResponsible,
      cpfResponsible, kinshipResponsible,
    );
    newResponsible.setStudentId(student.id);

    dispatch(getOneStudentWithAllResponsibleAndAddressAction(
      student.id,
    ));

    if (responsibleData) {
      newResponsible.setId(responsibleData.id);
      dispatch(updateResponsible(newResponsible));
    }

    if (!responsibleData) {
      dispatch(createResponsible(newResponsible));
    }

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
            {responsibleData === null ? (
              <Title>Cadastrar Responsavel</Title>
            ) : (
              <Title>Editar Responsavel</Title>
            )}
            <FormResponsible
              cpf={cpfResponsible}
              setCpf={setCpfResponsible}
              cpfStatus={cpfStatusResponsible}
              setCpfStatus={setCpfStatusResponsible}
              email={emailResponsible}
              setEmail={setEmailResponsible}
              emailStatus={emailStatusResponsible}
              setEmailStatus={setEmailStatusResponsible}
              name={nameResponsible}
              setName={setNameResponsible}
              nameStatus={nameStatusResponsible}
              setNameStatus={setNameStatusResponsible}
              kinship={kinshipResponsible}
              setKinship={setKinshipResponsible}
              rg={rgResponsible}
              setRg={setRgResponsible}
              rgStatus={rgStatusResponsible}
              setRgStatus={setRgStatusResponsible}
            />
            <ContainerButtons>
              <ButtonSucess type="submit">
                {responsibleData === null ? 'Cadastrar' : 'Atualizar'}
              </ButtonSucess>
            </ContainerButtons>
          </form>
        </Container>
      </Fade>
    </Dialog>
  );
}

ModalUpdateResponsible.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
  responsibleData: PropTypes.objectOf(PropTypes.any),
};

ModalUpdateResponsible.defaultProps = {
  responsibleData: null,
};

export default ModalUpdateResponsible;
