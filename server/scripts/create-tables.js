const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhots:5432/first_fullstack_app';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS  types (
        id SERIAL PRIMARY KEY,
        type VARCHAR(256) NOT NULL,
        pet BOOLEAN NOT NULL
      ); 
    
      CREATE TABLE IF NOT EXISTS animals (
          id SERIAL PRIMARY KEY,
          name VARCHAR(256) NOT NULL,
          type VARCHAR(256) NOT NULL,
          age INTEGER NOT NULL,
          dangerous BOOLEAN NOT NULL,
          url TEXT NOT NULL
        );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });