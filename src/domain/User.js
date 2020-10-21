import { toast } from 'react-toastify';

export default class User {
  constructor({ email, password }) {
    this.username = this.validateEmail(email);
    this.password = this.validatePassword(password);
  }

  validatePassword(password) {
    const passwdLength = password.split('');
    if (passwdLength.length < 4) {
      toast.error('Senha com caracteres insufisientes.');
    }

    return password;
  }

  validateEmail(email) {
    if (!/@/.test(email)) {
      toast.error('Esse email é invalido.');
    }

    return email;
  }
}
