// eslint-disable-next-line import/prefer-default-export
export function teacherRegistrationAction(Teacher) {
  return {
    type: '@teacher/TEACHER_REGISTRATION',
    payload: { Teacher },
  };
}
