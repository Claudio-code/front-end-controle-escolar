// eslint-disable-next-line import/prefer-default-export
export function topicsRegistrationAction(Topics) {
  return {
    type: '@topics/TOPICS_REGISTRATION',
    payload: { Topics },
  };
}
