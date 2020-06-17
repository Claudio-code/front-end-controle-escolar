export default class Student {
  static validateName(name) {
    const regex = /([^a-zà-úA-ZÀ-Ú ]|[äåæËÎÏÐðÑ×÷ØÝÞß])/;
    return regex.test(name);
  }

  static validateEmail(email) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return !regex.test(email);
  }

  static validateCpf(cpf) {
    const regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    return !regex.test(cpf);
  }

  static validateAge(age) {
    if (age > 100) {
      return true;
    }

    return false;
  }
}
