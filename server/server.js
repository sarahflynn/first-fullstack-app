const express = require('express');

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const client = require('./db-client');

app.get('/api/animals', (req, res) => {
  client.query(`
    SELECT
      a.id,
      a.name,
      a.type,
      a.age,
      a.dangerous,
      a.url
      t.id as "typeID",
      t.pet
    FROM animals as a
    JOIN types as t
    ON a.type = t.id
    ORDER BY n.name;
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