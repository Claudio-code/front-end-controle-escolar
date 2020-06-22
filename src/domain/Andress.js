import cepPromise from 'cep-promise';

export default class Andress {
  static async validarCep(cep) {
    try {
      const response = await cepPromise(cep);
      response.statusResponse = false;

      return response;
    } catch (error) {
      console.log(error);
      return true;
    }
  }
}
