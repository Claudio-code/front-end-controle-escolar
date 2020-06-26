import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

export function* studentAllRegistration({ payload }) {
  try {
    yield call(api.post, 'student/registrationComplete', payload);

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

export default all([
  takeLatest('@student/COMPLETE_STUDENT_REGISTRATION', studentAllRegistration),
  takeLatest('@student/STUDENT_REGISTRATION', studentRegistration),
]);
