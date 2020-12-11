// eslint-disable-next-line import/prefer-default-export
export function classeRegistrationAction(Classe) {
  return {
    type: '@classes/CLASSE_REGISTRATION',
    payload: { Classe },
  };
}

export function getAllClasse() {
  return {
    type: '@classes/CLASSE_GET_ALL',
    payload: {},
  };
}

export function setAllClasse(classesList) {
  return {
    type: '@classes/CLASSE_SET_ALL',
    payload: { classesList },
  };
}

export function setOneClasse(classe) {
  return {
    type: '@classes/CLASSE_SET_ONE',
    payload: { classe },
  };
}

export function updateClasse(Classe) {
  return {
    type: '@classes/CLASSE_UPDATE',
    payload: { Classe },
  };
}

export function deleteClasse(ClasseId) {
  return {
    type: '@classes/CLASSE_DELETE',
    payload: { ClasseId },
  };
}

export function addCourseInClasse(Classe) {
  return {
    type: '@classes/CLASSE_ADD_COURSE',
    payload: { Classe },
  };
}
