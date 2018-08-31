const client = require('../db-client.js');
const animals = require('../data/cute-animals.json');

Promise.all(
  animals.map(animal => {
    return client.query(`
        INSERT INTO animals (
          type_id, name, age, dangerous, url
        )
        SELECT
          id as type_id,
          $1 as name,
          $2 as age,
          $3 as dangerous,
          $4 as url
        FROM types
        WHERE type = $5;
    `,
    [animal.name, animal.age, animal.dangerous, animal.url, animal.type]
    );
  })
)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });