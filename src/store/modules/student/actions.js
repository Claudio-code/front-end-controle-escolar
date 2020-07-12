export function completeStudentRegistrationAction(Student) {
  return {
    type: '@student/COMPLETE_STUDENT_REGISTRATION',
    payload: { Student },
  };
}

export function StudentRegistrationAndAddressAction(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION_AND_ADDRESS',
    payload: { Student },
  };
}

export function StudentRegistrationAndResponsibleAction(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION_AND_RESPONSIBLE',
    payload: { Student },
  };
}

export function StudentRegistrationAction(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION',
    payload: { Student },
  };
}

export function getAllStudentsAction() {
  return {
    type: '@student/STUDENT_GET_ALL',
    payload: {},
  };
}

export function setAllStudentsAction(studentList) {
  return {
    type: '@student/STUDENT_SET_ALL',
    payload: { studentList },
  };
}

export function getOneStudentWithAllResponsibleAndAddressAction(studentId) {
  return {
    type: '@student/GET_ONE_STUDENT_WITH_ALL_RESPONSIBLE_AND_ADDRESS',
    payload: { studentId },
  };
}

export function setOneStudentAction(student) {
  return {
    type: '@student/SET_STUDENT',
    payload: { student },
  };
}
