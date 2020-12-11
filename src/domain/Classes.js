import GenericEntity from './GenericEntity';

class Classes extends GenericEntity {
  constructor(name, maximumStudents, id = false) {
    super();
    if (id) {
      this.id = id;
    }
    this.name = name;
    this.maximumStudents = maximumStudents;
    this.numberStudents = 0;
  }
}

export default Classes;
