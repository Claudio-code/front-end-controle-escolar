import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSucess, signFailure } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';
import User from '../../../domain/User';

export function* signIn({ payload }) {
  try {
    const user = new User(payload);
    const response = yield call(api.post, '/login_check', user);

    const { token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    toast.success('Sign In Sucess.');
    yield put(signInSucess({
      token,
      ...user,
    }));

    setTimeout(() => history.push('/dashboard'), 1000);
  } catch (error) {
    toast.error('Esse usuario não existe.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload || !payload.auth || !payload.auth.token) return;

  const { token } = payload.auth.token;
  if (token) {
    api.defaults.headers.common = { Authorization: `bearer ${token}` };
  }
}

export const signOut = () => history.push('/');

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
