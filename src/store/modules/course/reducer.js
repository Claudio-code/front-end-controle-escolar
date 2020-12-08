/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  course: null,
  courseList: [],
};

export default function course(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@course/COURSE_SET_ALL': {
        draft.courseList = action.payload.coursesList;
        break;
      }
      case '@course/COURSE_SET_ONE': {
        draft.course = action.payload.course;
        break;
      }
      default:
        return state;
    }
  });
}
