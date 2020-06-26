import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import AddressForm from '../../components/AddressForm';
import FormStudent from '../../components/FormStudent';

import Student from '../../domain/Student';
import Address from '../../domain/Address';

import { StudentRegistrationAndAddressAction } from '../../store/modules/student/actions';

import { SeparatorMargin } from './styles';
import {
  Container,
  HorizontalSeparator,
  ContainerButtons,
  ButtonGoBack,
  ButtonSucess,
} from '../../styles/global';

function StudentAndAddressRegistration() {
  const dispacth = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [ageStatus, setAgeStatus] = useState(false);
  const [rgStatus, setRgStatus] = useState(false);
  const [cpfStatus, setCpfStatus] = useState(false);

  const [cepStudent, setCepStudent] = useState('');
  const [cityStudent, setCityStudent] = useState('');
  const [countryStudent, setCountryStudent] = useState('');
  const [numberStudent, setNumberStudent] = useState('');
  const [publicPlaceStudent, setPublicPlaceStudent] = useState('');

  const [cepStudentStatus, setCepStudentStatus] = useState(false);
  const [cityStudentStatus, setCityStudentStatus] = useState(false);
  const [countryStudentStatus, setCountryStudentStatus] = useState(false);
  const [numberStudentStatus, setNumberStudentStatus] = useState(false);
  const [publicPlaceStudentStatus, setPublicPlaceStudentStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentRes = Student.validateAllData([
      name, email, rg, cpf, cnh, age, ethnicity, sex,
    ]);
    const addressRes = Address.validateAllData([
      cityStudent, cepStudent, countryStudent,
      publicPlaceStudent, numberStudent,
    ]);

    if (nameStatus || emailStatus || ageStatus || rgStatus || cpfStatus) {
      return toast.error('Os dados do Formulario do aluno estão errados.');
    }

    if (cityStudentStatus || cepStudentStatus || countryStudentStatus
      || publicPlaceStudentStatus || numberStudentStatus) {
      return toast.error('Os dados do Formulario do endereço aluno estão errados.');
    }

    if (!studentRes || !addressRes) {
      return toast.error('Preencha os campos corretamete.');
    }

    const student = new Student(
      name, email, rg, cpf, cnh,
      age, ethnicity, sex,
    );
    student.setAddress(new Address(
      cityStudent, cepStudent, countryStudent,
      publicPlaceStudent, numberStudent,
    ));

    return dispacth(StudentRegistrationAndAddressAction(student));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormStudent
          title="Cadastro Completo de Aluno"
          name={name}
          setName={setName}
          nameStatus={nameStatus}
          setNameStatus={setNameStatus}
          email={email}
          setEmail={setEmail}
          emailStatus={emailStatus}
          setEmailStatus={setEmailStatus}
          cnh={cnh}
          setCnh={setCnh}
          cpf={cpf}
          setCpf={setCpf}
          cpfStatus={cpfStatus}
          setCpfStatus={setCpfStatus}
          rg={rg}
          setRg={setRg}
          rgStatus={rgStatus}
          setRgStatus={setRgStatus}
          age={age}
          setAge={setAge}
          ageStatus={ageStatus}
          setAgeStatus={setAgeStatus}
          ethnicity={ethnicity}
          setEthnicity={setEthnicity}
          sex={sex}
          setSex={setSex}
        />
        <HorizontalSeparator />
        <AddressForm
          cep={cepStudent}
          setCep={setCepStudent}
          cepStatus={cepStudentStatus}
          setCepStatus={setCepStudentStatus}
          city={cityStudent}
          setCity={setCityStudent}
          cityStatus={cityStudentStatus}
          setCityStatus={setCityStudentStatus}
          number={numberStudent}
          setNumber={setNumberStudent}
          numberStatus={numberStudentStatus}
          setNumberStatus={setNumberStudentStatus}
          country={countryStudent}
          setCountry={setCountryStudent}
          countryStatus={countryStudentStatus}
          setCountryStatus={setCountryStudentStatus}
          publicPlace={publicPlaceStudent}
          setPublicPlace={setPublicPlaceStudent}
          publicPlaceStatus={publicPlaceStudentStatus}
          setPublicPlaceStatus={setPublicPlaceStudentStatus}
        />
        <SeparatorMargin />
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
}

export default StudentAndAddressRegistration;
