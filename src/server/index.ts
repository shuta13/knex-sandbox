import express from 'express';
import { PORT } from '../config/constants';

const app = express();

app.get('/', (_req, res) => res.sendStatus(200));
app.get('/health', (_req, res) => res.sendStatus(200));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
