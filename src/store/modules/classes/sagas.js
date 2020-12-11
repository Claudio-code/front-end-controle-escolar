import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { setAllClasse } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

export function* classeRegister({ payload }) {
  try {
    yield call(api.post, 'api/classes/', payload);

    toast.success('Cadastro de turma feito com sucesso.');
    return history.push('/Turmas');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* getAllClasse() {
  try {
    const { data } = yield call(api.get, 'api/classes/');
    if (!Array.isArray(data)) {
      return;
    }

    yield put(setAllClasse(data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateClasse({ payload: { Classe } }) {
  try {
    yield call(api.put, `api/classes/${Classe.id}`, { Classe });

    toast.success('turma atualizada com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteClasse({ payload: { ClasseId } }) {
  try {
    yield call(api.delete, `api/classes/${ClasseId}`);

    toast.success('turma deletada com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@classes/CLASSE_DELETE', deleteClasse),
  takeLatest('@classes/CLASSE_UPDATE', updateClasse),
  takeLatest('@classes/CLASSE_GET_ALL', getAllClasse),
  takeLatest('@classes/CLASSE_REGISTRATION', classeRegister),
]);
