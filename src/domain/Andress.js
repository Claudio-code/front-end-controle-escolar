/* eslint-disable camelcase */
import cepPromise from 'cep-promise';

export default class Andress {
  constructor(city, cep, country, public_place, number) {
    this.city = city;
    this.cep = cep;
    this.country = country;
    this.public_place = public_place;
    this.number = number;
  }

  static validateAllData(cityStatus, cepStatus, countryStatus, publicPlaceStatus, numberStatus) {
    return !(cityStatus && cepStatus && countryStatus && publicPlaceStatus && numberStatus);
  }

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
