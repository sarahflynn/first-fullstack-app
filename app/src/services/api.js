const url = 'http://localhost:3000/api';
const animalsUrl = `${url}/animals`;
const typesUrl = `${url}/types`;

export default {
  getAnimals() {
    return fetch(animalsUrl, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getAnimal(id) {
    return fetch(`${animalsUrl}/${id}`) 
      .then(response => response.json());
  },
  addAnimal(animal) {
    return fetch(animalsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(animal)
    })
      .then(response => response.json());
  },
  getTypes() {
    return fetch(typesUrl, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  removeAnimal(id) {
    return fetch(`${animalsUrl}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  }
};