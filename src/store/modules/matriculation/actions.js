// eslint-disable-next-line import/prefer-default-export
export function matriculationRegistrationAction(Matriculation) {
  return {
    type: '@matriculation/MATRICULATION_REGISTRATION',
    payload: { Matriculation },
  };
}

export function getAllMatriculation() {
  return {
    type: '@matriculation/MATRICULATION_GET_ALL',
    payload: {},
  };
}

export function setAllMatriculation(matriculationList) {
  return {
    type: '@matriculation/MATRICULATION_SET_ALL',
    payload: { matriculationList },
  };
}

export function setOneMatriculation(matriculation) {
  return {
    type: '@matriculation/MATRICULATION_SET_ONE',
    payload: { matriculation },
  };
}

export function updateMatriculation(Matriculation) {
  return {
    type: '@matriculation/MATRICULATION_UPDATE',
    payload: { Matriculation },
  };
}

export function deleteMatriculation(MatriculationId) {
  return {
    type: '@matriculation/MATRICULATION_DELETE',
    payload: { MatriculationId },
  };
}
