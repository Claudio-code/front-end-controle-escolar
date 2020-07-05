import React from 'react';
import { toast } from 'react-toastify';
import { DoneAll, HighlightOff } from '@material-ui/icons';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import Student from '../../../domain/Student';

import api from '../../../services/api';
import history from '../../../services/history';

import { setAllStudentsAction } from './actions';

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
    const { Student } = payload;
    yield call(api.post, 'student', Student);

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
        item.status ? <DoneAll /> : <HighlightOff />,
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

export default all([
  takeLatest('@student/STUDENT_REGISTRATION_AND_RESPONSIBLE', studentAndResponsibleRegistration),
  takeLatest('@student/STUDENT_REGISTRATION_AND_ADDRESS', studentAndAddressRegistration),
  takeLatest('@student/COMPLETE_STUDENT_REGISTRATION', studentAllRegistration),
  takeLatest('@student/STUDENT_REGISTRATION', studentRegistration),
  takeLatest('@student/STUDENT_GET_ALL', getAllStudents),
]);
