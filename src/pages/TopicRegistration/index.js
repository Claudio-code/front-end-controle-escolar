import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { topicsRegistrationAction } from '../../store/modules/topics/actions';
import Topics from '../../domain/Topics';
import FormTopics from '../../components/FormTopics';
import {
  Container,
  ContainerButtons,
  ButtonSucess,
  ButtonGoBack,
} from '../../styles/global';

const TopicRegistration = () => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amountHours, setAmountHours] = useState(0);

  const [nameStatus, setNameStatus] = useState(false);
  const [descriptionStatus, setDescriptionStatus] = useState(false);
  const [amountHoursStatus, setAmountHoursStatus] = useState(false);

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
    dispacth(topicsRegistrationAction(newTopic));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormTopics
          title="Cadastrar o topico da disiplina"
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
          <ButtonGoBack>
            Voltar
          </ButtonGoBack>
          <ButtonSucess type="submit">
            Cadastrar
          </ButtonSucess>
        </ContainerButtons>
      </form>
    </Container>
  );
};

export default TopicRegistration;
