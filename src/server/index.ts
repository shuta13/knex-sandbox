import express from 'express';
import { knex } from 'knex';
import { PORT } from '../config/constants';
import { Sandbox } from '../types/sandbox';
const knexFile = require('../../knexfile');

const app = express();

const env = process.env.NODE_ENV || 'development';
const options = knexFile[env];
const db = knex<Sandbox>(options);

app.get('/health', (_req, res) => res.sendStatus(200));

app.get('/', async (_req, res) => {
  let result;

  result = await db('sandbox').select('user_name');

  result = await db('sandbox').where('id', 1);

  db('sandbox')
    .select('id')
    .select('user_name')
    .then((userInfo) => {
      console.log(userInfo);
    });

  // const ids = knex<Sandbox>('sandbox').where('id');

  res.json(result);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
