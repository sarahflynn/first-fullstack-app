export default {
  getAnimals() {
    return fetch('http://localhost:3000/api/cute-animals', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }
};