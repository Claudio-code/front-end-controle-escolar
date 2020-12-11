import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  Container,
  ContainerButtons,
  ButtonSucess,
  ButtonGoBack,
} from '../../styles/global';
import FormClasses from '../../components/FormClasses';
import Classes from '../../domain/Classes';
import { classeRegistrationAction } from '../../store/modules/classes/actions';

const ClassesRegistration = () => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [maximumStudents, setMaximumStudents] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [maximumStudentsStatus, setMaximumStudentsStatus] = useState(false);

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

    const newClasse = new Classes(name, maximumStudents);
    dispacth(classeRegistrationAction(newClasse));
  };

  return (
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

export default ClassesRegistration;
