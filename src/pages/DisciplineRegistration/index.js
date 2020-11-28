import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Discipline from '../../domain/Discipline';
import FormDiscipline from '../../components/FormDiscipline';
import {
  Container,
  ContainerButtons,
  ButtonSucess,
  ButtonGoBack,
} from '../../styles/global';
import { disciplineRegistrationAction } from '../../store/modules/disipline/actions';

const DisciplineRegistration = () => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amountHours, setAmountHours] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [descriptionStatus, setDescriptionStatus] = useState(false);
  const [amountHoursStatus, setAmountHoursStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const disciplineRes = Discipline.validateAllData([
      name, description, amountHours,
    ]);

    if (nameStatus || descriptionStatus || amountHoursStatus) {
      return toast.error('Os dados do Formulario da disiplina estão errados.');
    }
    if (!disciplineRes) {
      return toast.error('Preencha os campos corretamente¹');
    }

    const newDiscipline = new Discipline(name, description, amountHours);
    dispacth(disciplineRegistrationAction(newDiscipline));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormDiscipline
          title="Cadastrar a disiplina"
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

export default DisciplineRegistration;
