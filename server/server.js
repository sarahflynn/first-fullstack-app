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



app.get('/api/cute-animals', (req, res) => {
  const data = readData();
  res.send(data);
});

app.post('/api/cute-animals', (req, res) => {
  const data = readData();
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body);
});

const PORT = 3000;

app.listen(PORT, () => console.log('app running...'));