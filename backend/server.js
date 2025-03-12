// Simple Express server for Railway deployment
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as time');
    client.release();
    
    res.status(200).json({
      status: 'ok',
      message: 'Server is running',
      database: 'connected',
      time: result.rows[0].time,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// API status endpoint
app.get('/api/v1/status', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is working correctly'
  });
});

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Murph API is running',
    version: '1.0.0'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});