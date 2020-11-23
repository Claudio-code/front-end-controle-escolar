class GenericEntity {
  static validateLetters(value) {
    const regex = /([^a-zà-úA-ZÀ-Ú ]|[äåæËÎÏÐðÑ×÷ØÝÞß])/;
    return regex.test(value);
  }

  static validateNumbers(value) {
    const regex = /^[1-9]\d*$/;
    return regex.test(value);
  }

  static validateAllData(attributes) {
    for (let index = 0; index < attributes.length; index += 1) {
      const element = attributes[index];
      if (element === '' || element === 0 || !element) {
        return false;
      }
    }

    return true;
  }
}

export default GenericEntity;
