const client = require('../db-client.js');
const types = require('../data/animal-types.json');

Promise.all(
  types.map(type => {
    return client.query(`
      INSERT INTO types (type, pet)
      VALUES ($1, $2);
    `,
    [type.type, type.pet]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());