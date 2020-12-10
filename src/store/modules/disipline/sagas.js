import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { setAllDisciplines } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

export function* disiplineRegister({ payload }) {
  try {
    yield call(api.post, 'api/discipline/', payload);

    toast.success('Cadastro de disiplina feito com sucesso.');
    return history.push('/Disiplinas');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* getAllDiscipline() {
  try {
    const { data } = yield call(api.get, 'api/discipline/');
    if (!Array.isArray(data)) {
      return;
    }

    yield put(setAllDisciplines(data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateDiscipline({ payload: { Discipline } }) {
  try {
    yield call(api.put, `api/discipline/${Discipline.id}`, { Discipline });

    toast.success('Disiplina atualizada com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteDiscipline({ payload: { DisciplineId } }) {
  try {
    yield call(api.delete, `api/discipline/${DisciplineId}`);

    toast.success('Disiplina deletada com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* addTeacher({ payload: { Discipline, Teacher } }) {
  try {
    yield call(api.put, `api/discipline/addTeacher/${Discipline.id}`, { TeacherId: Teacher.id });

    toast.success('Adicionado o professor.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@disipline/ADD_TEACHER_DISIPLINE', addTeacher),
  takeLatest('@disipline/DISIPLINE_DELETE', deleteDiscipline),
  takeLatest('@disipline/DISIPLINE_UPDATE', updateDiscipline),
  takeLatest('@disipline/DISIPLINE_GET_ALL', getAllDiscipline),
  takeLatest('@disipline/DISIPLINE_REGISTRATION', disiplineRegister),
]);
