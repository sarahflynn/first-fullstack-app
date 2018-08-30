export default {
  getAnimals() {
    return fetch('http://localhost:3000/api/animals', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getAnimal(id) {
    return fetch(`http://localhost:3000/api/animals/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addAnimal(animal) {
    return fetch('http://localhost:3000/api/animals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(animal)
    })
      .then(response => response.json());
  }
};