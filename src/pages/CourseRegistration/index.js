import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { courseRegistrationAction } from '../../store/modules/course/actions';
import Course from '../../domain/Course';
import FormCourse from '../../components/FormCourse';
import {
  Container,
  ContainerButtons,
  ButtonSucess,
  ButtonGoBack,
} from '../../styles/global';

const CourseRegistration = () => {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [totalAmountHours, setTotalAmountHours] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [descriptionStatus, setDescriptionStatus] = useState(false);
  const [totalAmountHoursStatus, setTotalAmountHoursStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const courseRes = Course.validateAllData([
      name, description, totalAmountHours,
    ]);

    if (nameStatus || descriptionStatus || totalAmountHoursStatus) {
      return toast.error('Os dados do Formulario da disiplina estão errados.');
    }
    if (!courseRes) {
      return toast.error('Preencha os campos corretamente¹');
    }

    const newCourse = new Course(name, description, totalAmountHours);
    dispacth(courseRegistrationAction(newCourse));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormCourse
          title="Cadastrar o Curso"
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

export default CourseRegistration;
