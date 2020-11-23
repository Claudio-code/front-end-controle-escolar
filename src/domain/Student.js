import GenericPeople from './GenericPeople';

class Student extends GenericPeople {
  constructor(name, email, rg, cpf, cnh, age, ethnicity, sex, status = true) {
    super();
    this.name = name;
    this.email = email;
    this.rg = rg;
    this.cpf = cpf;
    this.cnh = cnh;
    this.age = age;
    this.ethnicity = ethnicity;
    this.sex = sex;
    this.status = status;
  }

  setId(id) {
    this.id = id;
  }

  setAddress(address) {
    this.Address = address;
  }

  setResponsible(responsible) {
    this.Responsible = responsible;
  }
}

export default Student;
