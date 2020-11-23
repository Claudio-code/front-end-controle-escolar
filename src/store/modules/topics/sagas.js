import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

export function* topicRegister({ payload }) {
  try {
    yield call(api.post, 'api/topics/', payload);

    toast.success('Cadastro do topico feito com sucesso.');
    return history.push('/Topicos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@topics/TOPICS_REGISTRATION', topicRegister),
]);
