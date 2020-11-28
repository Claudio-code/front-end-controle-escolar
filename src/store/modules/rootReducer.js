import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './student/reducer';
import teacher from './teacher/reducer';
import topics from './topics/reducer';
import disipline from './disipline/reducer';

export default combineReducers({
  auth,
  student,
  teacher,
  topics,
  disipline,
});
