import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Sequelize } from 'sequelize';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;
const apiPrefix = process.env.API_PREFIX || '/api/v1';

// Database connection
const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Health check route
app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ 
      status: 'ok', 
      message: 'Server is running',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Server is running but database connection failed',
      error: process.env.NODE_ENV === 'development' ? error : 'Database connection error',
      timestamp: new Date().toISOString()
    });
  }
});

// API routes
app.get(apiPrefix + '/status', (req, res) => {
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

// Start the server
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('Database connection established successfully');

    // Start server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    // Don't exit - Railway will restart if we crash
    console.log('Server will start without database connection');
    app.listen(port, () => {
      console.log(`Server running on port ${port} (no database connection)`);
    });
  }
};

// Start the server
startServer();

export default app;