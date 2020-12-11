import { toast } from 'react-toastify';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import Student from '../../../domain/Student';
import api from '../../../services/api';
import history from '../../../services/history';

import { setAllStudentsAction, setOneStudentAction } from './actions';

export function* studentAllRegistration({ payload }) {
  try {
    yield call(api.post, 'api/student/', payload);

    toast.success('Cadastro de estudante, Responsavel e Endereço feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* studentRegistration({ payload }) {
  try {
    yield call(api.post, 'api/student/', payload);

    toast.success('Cadastro de estudante feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* studentAndAddressRegistration({ payload }) {
  try {
    yield call(api.post, 'api/student/', payload);

    toast.success('Cadastro de estudante e endereço feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* studentAndResponsibleRegistration({ payload }) {
  try {
    yield call(api.post, 'api/student/', payload);

    toast.success('Cadastro de estudante e responsavel feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    return toast.error(error.response.data.error);
  }
}

export function* getAllStudents() {
  try {
    const response = yield call(api.get, 'api/student/');

    const listStudent = response.data;
    const list = [];
    for (let i = 0; i < listStudent.length; i += 1) {
      const item = listStudent[i];

      const student = new Student(
        item.name,
        item.email,
        item.rg,
        item.cpf,
        item.cnh,
        item.age,
        item.ethnicity,
        item.sex,
        item.status,
      );
      student.setId(item.id);
      list.push(student);
      student.setAddress(item.Addresses[0]);
      student.setResponsible(item.Responsibles[0]);
    }

    yield put(setAllStudentsAction(list));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* getOneStudentWithAllResponsibleAndAddress({ payload: { studentId } }) {
  try {
    const response = yield call(api.get, `api/student/${studentId}`);

    yield put(setOneStudentAction(response.data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateStudent({ payload: { student } }) {
  try {
    yield call(api.put, `api/student/${student.id}`, { Student: student });

    toast.success('Edição do estudante feita com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateAddress({ payload: { address } }) {
  try {
    yield call(api.put, `api/address/${address.id}`, address);

    toast.success('Edição do Endereço feita com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* createAddress({ payload: { address } }) {
  try {
    yield call(api.post, 'api/address/', address);

    toast.success('Criado Endereço do estudante.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateResponsible({ payload: { responsible } }) {
  try {
    yield call(api.put, `api/responsible/${responsible.id}`, responsible);

    toast.success('Edição do Responsavel feita com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* createResponsible({ payload: { responsible } }) {
  try {
    yield call(api.post, 'api/responsible/', responsible);

    toast.success('Cadastrado Responsavel do estudante.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteStudent({ payload: { studentId } }) {
  try {
    yield call(api.delete, `api/student/${studentId}`);

    toast.success('Estudande deletado com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteAddress({ payload: { addressId } }) {
  try {
    yield call(api.delete, `api/address/${addressId}`);

    toast.success('Endereço removido com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteResponsible({ payload: { responsibleId } }) {
  try {
    yield call(api.delete, `api/responsible/${responsibleId}`);

    toast.success('Responsavel removido com sucesso.');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@student/DELETE_RESPONSIBLE', deleteResponsible),
  takeLatest('@student/DELETE_ADDRESS', deleteAddress),
  takeLatest('@student/STUDENT_DELETE', deleteStudent),
  takeLatest('@student/GET_ONE_STUDENT_WITH_ALL_RESPONSIBLE_AND_ADDRESS', getOneStudentWithAllResponsibleAndAddress),
  takeLatest('@student/STUDENT_REGISTRATION_AND_RESPONSIBLE', studentAndResponsibleRegistration),
  takeLatest('@student/STUDENT_REGISTRATION_AND_ADDRESS', studentAndAddressRegistration),
  takeLatest('@student/COMPLETE_STUDENT_REGISTRATION', studentAllRegistration),
  takeLatest('@student/STUDENT_REGISTRATION', studentRegistration),
  takeLatest('@student/STUDENT_GET_ALL', getAllStudents),
  takeLatest('@student/UPDATE_STUDENT', updateStudent),
  takeLatest('@student/UPDATE_ADDRESS', updateAddress),
  takeLatest('@student/CREATE_ADDRESS', createAddress),
  takeLatest('@student/UPDATE_RESPONSIBLE', updateResponsible),
  takeLatest('@student/CREATE_RESPONSIBLE', createResponsible),
]);
