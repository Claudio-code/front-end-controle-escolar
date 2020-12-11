import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { setAllMatriculation } from './actions';

export function* matriculationRegistration({ payload: { Matriculation } }) {
  try {
    yield call(api.post, 'api/matriculation/', { ...Matriculation });

    toast.success('Matricula feita com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* getAllMatriculation() {
  try {

    const { data } = yield call(api.get, 'api/matriculation/');
    if (!Array.isArray(data)) {
      return;
    }
    yield put(setAllMatriculation(data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateMatriculation({ payload: { Matriculation } }) {
  try {
    yield call(api.put, `api/matriculation/${Matriculation.id}`, { ...Matriculation });

    toast.success('Atualização da Matricula feita com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteMatriculation({ payload: { MatriculationId } }) {
  try {
    yield call(api.delete, `api/matriculation/${MatriculationId}`);

    toast.success('Matricula deletada com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@matriculation/MATRICULATION_DELETE', deleteMatriculation),
  takeLatest('@matriculation/MATRICULATION_UPDATE', updateMatriculation),
  takeLatest('@matriculation/MATRICULATION_GET_ALL', getAllMatriculation),
  takeLatest('@matriculation/MATRICULATION_REGISTRATION', matriculationRegistration),
]);
