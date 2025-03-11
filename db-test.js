const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    const client = await pool.connect();
    
    // Test basic connection
    const result = await client.query('SELECT NOW() as current_time');
    console.log('Connection successful!');
    console.log('Current database time:', result.rows[0].current_time);
    
    // List all tables in the database
    const tablesResult = await client.query();
    
    console.log('\nAvailable tables:');
    if (tablesResult.rows.length === 0) {
      console.log('No tables found. You may need to create your schema.');
    } else {
      tablesResult.rows.forEach(row => {
        console.log();
      });
    }
    
    client.release();
  } catch (err) {
    console.error('Connection error:', err.message);
  } finally {
    await pool.end();
  }
}

testConnection();
