import GenericPeople from './GenericPeople';

export default class Responsible extends GenericPeople {
  constructor(name, email, rg, cpf, kinship) {
    super();
    this.name = name;
    this.email = email;
    this.rg = rg;
    this.cpf = cpf;
    this.kinship = kinship;
  }

  static validateAllData(nameStatus, emailStatus, rgStatus, cpfStatus) {
    return !(nameStatus && emailStatus && rgStatus && cpfStatus);
  }
}
