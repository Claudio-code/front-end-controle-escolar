export default class GenericPeople {
  static validateName(name) {
    const regex = /([^a-zà-úA-ZÀ-Ú ]|[äåæËÎÏÐðÑ×÷ØÝÞß])/;
    return regex.test(name);
  }

  static validateEmail(email) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return !regex.test(email);
  }

  static validateCpf(cpf) {
    const regex = /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;
    return !regex.test(cpf);
  }

  static validateAge(age) {
    return age > 100;
  }

  static validateRg(rg) {
    const regex = /(\d{1,2})(\d{3})(\d{3})(\d{1})$/;
    return regex.test(rg);
  }
}
