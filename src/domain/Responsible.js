import GenericPeople from './GenericPeople';

class Responsible extends GenericPeople {
  constructor(name, email, rg, cpf, kinship, status = true) {
    super();
    this.name = name;
    this.email = email;
    this.rg = rg;
    this.cpf = cpf;
    this.kinship = kinship;
    this.status = status;
  }

  setId(id) {
    this.id = id;
  }

  setStudentId(id) {
    this.student_id = id;
  }
}

export default Responsible;
