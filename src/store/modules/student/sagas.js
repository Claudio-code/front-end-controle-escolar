import React from 'react';
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
    yield call(api.post, 'student/registration', payload);

    toast.success('Cadastro de estudante, Responsavel e Endereço feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* studentRegistration({ payload }) {
  try {
    yield call(api.post, 'student', payload.Student);

    toast.success('Cadastro de estudante feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* studentAndAddressRegistration({ payload }) {
  try {
    yield call(api.post, 'student/registration', payload);

    toast.success('Cadastro de estudante e endereço feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* studentAndResponsibleRegistration({ payload }) {
  try {
    yield call(api.post, 'student/registration', payload);

    toast.success('Cadastro de estudante e responsavel feito com sucesso.');
    return history.push('/Alunos');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* getAllStudents() {
  try {
    const response = yield call(api.get, 'student');

    const listStudent = response.data;
    const list = [];
    for (let i = 0; i < listStudent.length; i++) {
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
    }

    yield put(setAllStudentsAction(list));
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* getOneStudentWithAllResponsibleAndAddress({ payload }) {
  try {
    const { studentId } = payload;
    const response = yield call(api.get, `find/student/${studentId}`);

    yield put(setOneStudentAction(response.data));
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* updateStudent({ payload }) {
  try {
    const { student } = payload;
    yield call(api.put, 'student', student);

    return toast.success('Edição do estudante feita com sucesso.');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* updateAddress({ payload }) {
  try {
    const { address } = payload;
    yield call(api.put, 'andress', address);

    return toast.success('Edição do Endereço feita com sucesso.');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* createAddress({ payload }) {
  try {
    const { address } = payload;
    yield call(api.post, 'andress', address);

    return toast.success('Criado Endereço do estudante.');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export function* updateResponsible({ payload }) {
  try {
    const { responsible } = payload;
    yield call(api.put, 'responsible', responsible);

    return toast.success('Edição do Responsavel feita com sucesso.');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}
export function* createResponsible({ payload }) {
  try {
    const { responsible } = payload;
    yield call(api.post, 'responsible', responsible);

    return toast.success('Cadastrado Responsavel do estudante.');
  } catch (error) {
    console.error(error.response);
    return toast.error(error.response.data.error);
  }
}

export default all([
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
