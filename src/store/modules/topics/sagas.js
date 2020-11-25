import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { setAllTopics } from './actions';
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

export function* getAllTopics() {
  try {
    const { data } = yield call(api.get, 'api/topics/');
    if (!Array.isArray(data)) {
      return;
    }

    yield put(setAllTopics(data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateTopic({ payload: { Topic } }) {
  try {
    yield call(api.put, `api/topics/${Topic.id}`, { Topic });

    toast.success('Topico atualizado com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteTopic({ payload: { TopicId } }) {
  try {
    yield call(api.delete, `api/topics/${TopicId}`);

    toast.success('Topico deletado com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@topics/TOPICS_DELETE', deleteTopic),
  takeLatest('@topics/TOPICS_UPDATE', updateTopic),
  takeLatest('@topics/TOPICS_GET_ALL', getAllTopics),
  takeLatest('@topics/TOPICS_REGISTRATION', topicRegister),
]);
