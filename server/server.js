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
      a.type_id,
      a.age,
      a.dangerous,
      a.url,
      t.id as "typeID",
      t.pet
    FROM animals as a
    JOIN types as t
    ON a.type_id = t.id
    ORDER BY a.name;
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
      type_id,
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
    INSERT INTO animals (name, type_id, age, dangerous, url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.type_id, body.age, body.dangerous, body.url]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.get('/api/types', (req, res) => {
  client.query(`
    SELECT *
    FROM types;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.delete('/api/animals/:id', (req, res) => {
  client.query(`
    delete from animals where id=$1;
  `,
  [req.params.id]
  ).then(() => { 
    res.send({ removed: true });
  });
});

const PORT = 3000;

app.listen(PORT, () => console.log('app running...'));