import { toast } from 'react-toastify';
import { all, takeLatest, call } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

export function* teacherRegistration({ payload }) {
  try {
    yield call(api.post, 'api/teacher/', payload);

    toast.success('Cadastro do professor feito com sucesso.');
    return history.push('/Professores');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@teacher/TEACHER_REGISTRATION', teacherRegistration),
]);
