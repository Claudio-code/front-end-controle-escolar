// eslint-disable-next-line import/prefer-default-export
export function topicsRegistrationAction(Topics) {
  return {
    type: '@topics/TOPICS_REGISTRATION',
    payload: { Topics },
  };
}

export function getAllTopics() {
  return {
    type: '@topics/TOPICS_GET_ALL',
    payload: {},
  };
}

export function setAllTopics(topicList) {
  return {
    type: '@topics/TOPICS_SET_ALL',
    payload: { topicList },
  };
}

export function setOneTopic(topic) {
  return {
    type: '@topics/TOPICS_SET_ONE',
    payload: { topic },
  };
}

export function updateTopic(Topic) {
  return {
    type: '@topics/TOPICS_UPDATE',
    payload: { Topic },
  };
}

export function deleteTopic(TopicId) {
  return {
    type: '@topics/TOPICS_DELETE',
    payload: { TopicId },
  };
}
