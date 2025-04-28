

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { storage } from './server/storage';

const app = express();
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.get('/api/services', async (req, res) => {
  try {
    const services = await storage.getServices();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log();
});

