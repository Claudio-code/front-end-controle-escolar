// eslint-disable-next-line import/prefer-default-export
export function courseRegistrationAction(Course) {
  return {
    type: '@course/COURSE_REGISTRATION',
    payload: { Course },
  };
}

export function courseRegistrationActionAddDisciplines(Course) {
  return {
    type: '@course/COURSE_REGISTRATION_ADD_DICIPLINES',
    payload: { Course },
  };
}

export function getAllCourse() {
  return {
    type: '@course/COURSE_GET_ALL',
    payload: {},
  };
}

export function setAllCourse(coursesList) {
  return {
    type: '@course/COURSE_SET_ALL',
    payload: { coursesList },
  };
}

export function setOneCourse(course) {
  return {
    type: '@course/COURSE_SET_ONE',
    payload: { course },
  };
}

export function updateCourse(Course) {
  return {
    type: '@course/COURSE_UPDATE',
    payload: { Course },
  };
}

export function deleteCourse(CourseId) {
  return {
    type: '@course/COURSE_DELETE',
    payload: { CourseId },
  };
}

export function addCoordinatorCourse({ Course, Teacher }) {
  return {
    type: '@course/ADD_COORDINATOR_COURSE',
    payload: { Course, Teacher },
  };
}
