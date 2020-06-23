export function completeStudentRegistration(Student) {
  return {
    type: '@student/COMPLETE_STUDENT_REGISTRATION',
    payload: { Student },
  };
}

export function StudentRegistrationAndAnddress(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION_AND_ANDDRESS',
    payload: { Student },
  };
}

export function StudentRegistrationAndResponsible(Student) {
  return {
    type: '@student/STUDENT_REGISTRATION_AND_RESPONSIBLE',
    payload: { Student },
  };
}
