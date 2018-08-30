const client = require('../db-client.js');
const animals = require('../data/cute-animals.json');

Promise.all(
  animals.map(animal => {
    return client.query(`
        INSERT INTO animals (name, type_id, age, dangerous, url
        )
        SELECT
          id git 
          $1 as name,
          $3 as age,
          $4 as dangerous,
          $5 as url
        FROM types
        WHERE type = $2;
    `,
    [animal.name, animal.type_id, animal.age, animal.dangerous, animal.url]
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