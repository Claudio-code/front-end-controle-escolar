/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  studentsList: [],
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@student/STUDENT_SET_ALL': {
        draft.studentsList = action.payload.studentList;
        break;
      }
      case '@student/SET_STUDENT': {
        draft.student = action.payload.student;
        break;
      }
      default:
        return state;
    }
  });
}
