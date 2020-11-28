// eslint-disable-next-line import/prefer-default-export
export function disciplineRegistrationAction(Discipline) {
  return {
    type: '@disipline/DISIPLINE_REGISTRATION',
    payload: { Discipline },
  };
}

export function getAllDisciplines() {
  return {
    type: '@disipline/DISIPLINE_GET_ALL',
    payload: {},
  };
}

export function setAllDisciplines(disciplinesList) {
  return {
    type: '@disipline/DISIPLINE_SET_ALL',
    payload: { disciplinesList },
  };
}

export function setOneDiscipline(discipline) {
  return {
    type: '@disipline/DISIPLINE_SET_ONE',
    payload: { discipline },
  };
}

export function updateDiscipline(Discipline) {
  return {
    type: '@disipline/DISIPLINE_UPDATE',
    payload: { Discipline },
  };
}

export function deleteDiscipline(DisciplineId) {
  return {
    type: '@disipline/DISIPLINE_DELETE',
    payload: { DisciplineId },
  };
}
