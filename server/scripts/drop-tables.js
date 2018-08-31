const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/first_fullstack_app';

const client = new Client(databaseUrl);

client.connect()
  .then (() => {
    return client.query(`
      DROP TABLE IF EXISTS types CASCADE;
      DROP TABLE IF EXISTS animals CASCADE;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });