import GenericEntity from './GenericEntity';

class Course extends GenericEntity {
  constructor(name, description, totalAmountHours = 0, id = null) {
    super();
    this.name = name;
    this.description = description;
    this.totalAmountHours = totalAmountHours;
    if (id) {
      this.id = id;
    }
  }

  addDisciplines(disciplines) {
    this.disciplines = disciplines;
  }
}

export default Course;
