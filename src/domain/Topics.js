import GenericEntity from './GenericEntity';

class Topics extends GenericEntity {
  constructor(name, description, amountHours, status = true) {
    super();
    this.name = name;
    this.description = description;
    this.amountHours = amountHours;
    this.status = status;
  }

  setId(id) {
    this.id = id;
  }
}

export default Topics;
