/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  teacher: null,
  teacherList: [],
};

export default function teacher(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@teacher/TEACHER_SET_ALL': {
        draft.teacherList = action.payload.teacherList;
        break;
      }
      case '@teacher/TEACHER_REGISTRATION': {
        draft.teacher = action.payload.teacher;
        break;
      }
      default:
        return state;
    }
  });
}
