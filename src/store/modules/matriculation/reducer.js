/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  matriculation: null,
  matriculationList: [],
};

export default function matriculation(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@matriculation/MATRICULATION_SET_ALL': {
        draft.matriculationList = action.payload.matriculationList;
        break;
      }
      case '@matriculation/MATRICULATION_SET_ONE': {
        draft.matriculation = action.payload.matriculation;
        break;
      }
      default:
        return state;
    }
  });
}
