import express from 'express';
import { PORT } from '../config/constants';

const app = express();

app.get('*', (req, res) => {});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
