import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './student/reducer';
import teacher from './teacher/reducer';
import topics from './topics/reducer';

export default combineReducers({
  auth,
  student,
  teacher,
  topics,
});
