import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { setAllCourse } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

export function* courseRegister({ payload }) {
  try {
    yield call(api.post, 'api/course/', payload);

    toast.success('Cadastro de Course feito com sucesso.');
    return history.push('/Cursos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* courseRegisterAddDisciplines({ payload }) {
  try {
    yield call(api.post, 'api/course/', payload);

    toast.success('Cadastro de Curso feito com sucesso e disiplinas adicionadas.');
    return history.push('/Cursos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* getAllCourse() {
  try {
    const { data } = yield call(api.get, 'api/course/');
    if (!Array.isArray(data)) {
      return;
    }

    yield put(setAllCourse(data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateCourse({ payload: { Course } }) {
  try {
    yield call(api.put, `api/course/${Course.id}`, { Course });

    toast.success('Curso atualizada com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteCourse({ payload: { CourseId } }) {
  try {
    yield call(api.delete, `api/course/${CourseId}`);

    toast.success('Curso deletada com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* addCoordinator({ payload: { Course, Teacher } }) {
  try {
    yield call(api.put, `api/course/addCoordinator/${Course.id}`, { TeacherId: Teacher.id });

    toast.success('Adicionado o coordenador do curso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@course/ADD_COORDINATOR_COURSE', addCoordinator),
  takeLatest('@course/COURSE_REGISTRATION_ADD_DICIPLINES', courseRegisterAddDisciplines),
  takeLatest('@course/COURSE_DELETE', deleteCourse),
  takeLatest('@course/COURSE_UPDATE', updateCourse),
  takeLatest('@course/COURSE_GET_ALL', getAllCourse),
  takeLatest('@course/COURSE_REGISTRATION', courseRegister),
]);
