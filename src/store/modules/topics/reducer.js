/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  topic: null,
  topicList: [],
};

export default function topics(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@topics/TOPICS_SET_ALL': {
        draft.topicList = action.payload.topicList;
        break;
      }
      case '@topics/TOPICS_SET_ONE': {
        draft.topic = action.payload.topic;
        break;
      }
      default:
        return state;
    }
  });
}
