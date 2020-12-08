import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core';

import { courseRegistrationActionAddDisciplines } from '../../store/modules/course/actions';
import { getAllDisciplines } from '../../store/modules/disipline/actions';
import Course from '../../domain/Course';
import FormCourse from '../../components/FormCourse';
import CheckboxComponent from '../../components/CheckboxComponent';
import {
  Container,
  ContainerButtons,
  ButtonSucess,
  ButtonGoBack,
  Title,
} from '../../styles/global';
import {
  TableHeader,
  TableCellHeader,
  TableCellBody,
  ContainerTable,
} from './styles';

const CourseRegistrationAndAddDisciplines = () => {
  const dispacth = useDispatch();
  const [disciplinesData, setDisciplinesData] = useState([]);
  const disciplineList = useSelector((state) => state.disipline.disiplineList);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [totalAmountHours, setTotalAmountHours] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [descriptionStatus, setDescriptionStatus] = useState(false);
  const [totalAmountHoursStatus, setTotalAmountHoursStatus] = useState(false);

  useEffect(() => {
    dispacth(getAllDisciplines());
  }, []);

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
    newCourse.addDisciplines(disciplinesData);
    dispacth(courseRegistrationActionAddDisciplines(newCourse));
  };

  const handleAddDiscipline = (item) => {
    const data = disciplinesData;
    data.push(item.id);
    setDisciplinesData(data);
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
      <Title>Selecione as Disiplinas</Title>
      <ContainerTable>
        <TableContainer component={Paper} style={{ backgroundColor: '#f5f5f5', width: 'max-content' }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCellHeader>Nome</TableCellHeader>
                <TableCellHeader>Descrição</TableCellHeader>
                <TableCellHeader>carga horaria</TableCellHeader>
                <TableCellHeader>Opções</TableCellHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disciplineList && disciplineList.length && disciplineList.map((item) => (
                <TableRow key={item.name}>
                  <TableCellBody>{ item.name }</TableCellBody>
                  <TableCellBody>{ item.description }</TableCellBody>
                  <TableCellBody>{ `${item.amountHours} horas` }</TableCellBody>
                  <TableCellBody>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => handleAddDiscipline(item)}
                      onKeyDown={() => handleAddDiscipline(item)}
                    >
                      <CheckboxComponent />
                    </div>
                  </TableCellBody>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContainerTable>
    </Container>
  );
};

export default CourseRegistrationAndAddDisciplines;
