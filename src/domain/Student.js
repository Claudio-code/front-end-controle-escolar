import GenericPeople from './GenericPeople';

export default class Student extends GenericPeople {
  constructor(name, email, rg, cpf, cnh, age, ethnicity, sex) {
    super();
    this.name = name;
    this.email = email;
    this.rg = rg;
    this.cpf = cpf;
    this.cnh = cnh;
    this.age = age;
    this.ethnicity = ethnicity;
    this.sex = sex;
  }

  setAddress(address) {
    this.Address = address;
  }

  setResponsible(responsible) {
    this.Responsible = responsible;
  }

  static validateAllData(nameStatus, emailStatus, ageStatus, rgStatus, cpfStatus) {
    return !(nameStatus && emailStatus && ageStatus && rgStatus && cpfStatus);
  }
}
