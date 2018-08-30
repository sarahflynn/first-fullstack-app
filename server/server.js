const express = require('express');

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/first_fullstack_app';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/animals', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      type,
      age,
      dangerous,
      url
    FROM animals;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/animals/:id', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      type,
      age,
      dangerous,
      url
    FROM animals
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.post('/api/animals', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO animals (name, type, age, dangerous, url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.type, body.age, body.dangerous, body.url]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

const PORT = 3000;

app.listen(PORT, () => console.log('app running...'));