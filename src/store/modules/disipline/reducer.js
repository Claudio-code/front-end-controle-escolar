/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  disipline: null,
  disiplineList: [],
};

export default function disipline(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@disipline/DISIPLINE_SET_ALL': {
        draft.disiplineList = action.payload.disciplinesList;
        break;
      }
      case '@disipline/DISIPLINE_SET_ONE': {
        draft.disipline = action.payload.discipline;
        break;
      }
      default:
        return state;
    }
  });
}
