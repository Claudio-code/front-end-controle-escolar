import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

export function* studentAllRegistration({ payload }) {
  try {
    yield call(api.post, 'student/registration', payload);

    toast.success('Cadastro de estudante, Responsavel e Endereço feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* studentRegistration({ payload }) {
  try {
    const { Student } = payload;
    yield call(api.post, 'student', Student);

    toast.success('Cadastro de estudante feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* studentAndAddressRegistration({ payload }) {
  try {
    yield call(api.post, 'student/registration', payload);

    toast.success('Cadastro de estudante e endereço feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* studentAndResponsibleRegistration({ payload }) {
  try {
    yield call(api.post, 'student/registration', payload);

    toast.success('Cadastro de estudante e responsavel feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@student/STUDENT_REGISTRATION_AND_RESPONSIBLE', studentAndResponsibleRegistration),
  takeLatest('@student/STUDENT_REGISTRATION_AND_ADDRESS', studentAndAddressRegistration),
  takeLatest('@student/COMPLETE_STUDENT_REGISTRATION', studentAllRegistration),
  takeLatest('@student/STUDENT_REGISTRATION', studentRegistration),
]);
