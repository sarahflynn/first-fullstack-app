const databaseUrl = 'postgres://localhost:5432/first_fullstack_app';
const pg = require('pg');
const Client = pg.Client;

const client = new Client(databaseUrl);
client.connect()
  .then(() => console.log('connected to db', databaseUrl))
  .catch(err => console.log.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;