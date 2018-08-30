// import api from '../data/cute-animals.json';

// const pg = require('pg');
// const Client = pg.Client;
// const databaseUrl = 'postgres://localhots:5432/first_fullstack_app';

const client = require('../db-client.js');
const animals = require('./animals.json');

Promise.all(
  animals.map(animal => {
    return client.query(`
        INSERT INTO animals (id, name, type, age, dangerous, url)
        SELECT
          id,
          name,
          type,
          age,
          dangerous,
          url
    `,
    [animal.id, animal.name, animal.type, animal.age, animal.dangerous, animal.url]
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

// const client = new Client(databaseUrl);

// client.connect()
//   .then(() => {
//     return client.query(`
//         INSERT INTO animals (name, type, age, dangerous, url)
//         VALUES (${api.name}, ${api.type}, ${api.age}, ${api.dangerous})
     
//         );
//     `);
//   })
//   .then(
//     () => console.log('load tables complete'),
//     err => console.log(err)
//   )
//   .then(() => {
//     client.end();
//   });