import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  studentsList: [],
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '': {
        // draft.loading = true;
        break;
      }
      default:
        return state;
    }
  });

}
