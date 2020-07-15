import GenericPeople from './GenericPeople';

export default class Responsible extends GenericPeople {
  constructor(name, email, rg, cpf, kinship) {
    super();
    this.name = name;
    this.email = email;
    this.rg = rg;
    this.cpf = cpf;
    this.kinship = kinship;
    this.status = true;
  }

  setId(id) {
    this.id = id;
  }

  setStudentId(id) {
    this.student_id = id;
  }
}
