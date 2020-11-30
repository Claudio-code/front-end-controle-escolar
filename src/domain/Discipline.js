import GenericEntity from './GenericEntity';
import Teacher from './Teacher';

class Discipline extends GenericEntity {
  constructor(name, description, amountHours, status = true) {
    super();
    this.name = name;
    this.description = description;
    this.amountHours = amountHours;
    this.status = status;
  }

  setId(id) {
    this.id = id;
  }

  setTeacher(teacher) {
    this.teacher = new Teacher(
      teacher.name,
      teacher.email,
      teacher.rg,
      teacher.cpf,
      teacher.cnh,
      teacher.age,
      teacher.academicTitle,
    );
    this.teacher.setId(teacher.id);
  }
}

export default Discipline;
