// eslint-disable-next-line import/prefer-default-export
export function teacherRegistrationAction(Teacher) {
  return {
    type: '@teacher/TEACHER_REGISTRATION',
    payload: { Teacher },
  };
}

export function setAllTeacherAction(teacherList) {
  return {
    type: '@teacher/TEACHER_SET_ALL',
    payload: { teacherList },
  };
}

export function getAllTeacherAction() {
  return {
    type: '@teacher/TEACHER_GET_ALL',
    payload: {},
  };
}

export function getOneTeacher(teacherId) {
  return {
    type: '@teacher/TEACHER_GET_ONE',
    payload: { teacherId },
  };
}

export function setOneTeacher(teacher) {
  return {
    type: '@teacher/TEACHER_SET_ONE',
    payload: { teacher },
  };
}

export function updateTeacher(teacher) {
  return {
    type: '@teacher/TEACHER_UPDATE',
    payload: { teacher },
  };
}

export function deleteTeacher(teacherId) {
  return {
    type: '@teacher/TEACHER_DELETE',
    payload: { teacherId },
  };
}
