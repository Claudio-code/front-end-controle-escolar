import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { setAllTeacherAction, setOneTeacher } from './actions';

export function* teacherRegistration({ payload }) {
  try {
    yield call(api.post, 'api/teacher/', payload);

    toast.success('Cadastro do professor feito com sucesso.');
    return history.push('/Professores');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* getAllTeacher() {
  try {
    const { data } = yield call(api.get, 'api/teacher/');
    if (!Array.isArray(data)) {
      return;
    }

    yield put(setAllTeacherAction(data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* getOneTeacher({ payload: teacherId }) {
  try {
    const { data } = yield call(api.get, `api/teacher/${teacherId.teacherId}`);

    yield put(setOneTeacher(data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateTeacher({ payload: { teacher } }) {
  try {
    yield call(api.put, `api/teacher/${teacher.id}`, { Teacher: teacher });

    toast.success('Atualização do professor feita com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteTeacher({ payload: { teacherId } }) {
  try {
    yield call(api.delete, `api/teacher/${teacherId}`);

    toast.success('Professor deletado com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@teacher/TEACHER_DELETE', deleteTeacher),
  takeLatest('@teacher/TEACHER_UPDATE', updateTeacher),
  takeLatest('@teacher/TEACHER_GET_ONE', getOneTeacher),
  takeLatest('@teacher/TEACHER_GET_ALL', getAllTeacher),
  takeLatest('@teacher/TEACHER_REGISTRATION', teacherRegistration),
]);
