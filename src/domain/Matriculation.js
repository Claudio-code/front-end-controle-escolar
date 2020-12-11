import GenericEntity from './GenericEntity';

class Matriculation extends GenericEntity {
  constructor(student, classes, id = false) {
    super();
    if (id) {
      this.id = id;
    }
    this.StudentId = student.id;
    this.ClasseId = classes.id;
    this.academicRecord = Math.floor(Math.random() * 100);
  }
}

export default Matriculation;
