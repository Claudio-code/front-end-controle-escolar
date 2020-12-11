/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  classes: null,
  classesList: [],
};

export default function classes(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@classes/CLASSE_SET_ALL': {
        draft.classesList = action.payload.classesList;
        break;
      }
      case '@classes/CLASSE_SET_ONE': {
        draft.classes = action.payload.classe;
        break;
      }
      default:
        return state;
    }
  });
}
