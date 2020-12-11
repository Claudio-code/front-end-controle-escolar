import GenericEntity from './GenericEntity';
import Student from './Student';
import Classes from './Classes';

class Matriculation extends GenericEntity {
  constructor(student, classes) {
    super();
    this.student = student;
    this.classes = classes;
    this.academicRecord = Math.floor(Math.random() * 100);
  }
}

export default Matriculation;
