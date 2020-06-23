import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

export function* studentAllRegistration({ payload }) {
  try {
    const { student } = payload;
    const response = yield call(api.post, 'student/registrationComplete', payload);
    console.log(response.data);

  } catch (error) {
    console.log(error);
    return toast.error('Esse usuario não existe.');
  }
  console.log(payload);
}

export default all([
  takeLatest('@student/COMPLETE_STUDENT_REGISTRATION', studentAllRegistration),
]);
