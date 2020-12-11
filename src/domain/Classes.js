import GenericEntity from './GenericEntity';

class Classes extends GenericEntity {
  constructor(name, maximumStudents, id = false, numberStudents = false) {
    super();
    if (id) {
      this.id = id;
    }
    if (numberStudents) {
      this.numberStudents = numberStudents;
    } else {
      this.numberStudents = 0;
    }
    this.name = name;
    this.maximumStudents = maximumStudents;
  }

  addCourse(course) {
    this.CourseId = course.id;
  }
}

export default Classes;
