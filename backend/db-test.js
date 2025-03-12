const { Pool } = require('pg');
require('dotenv').config();

// Get database URL from environment variables
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL environment variable is not set!');
  process.exit(1);
}

// Create a new pool with SSL config required for Railway
const pool = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false  // Required for Railway PostgreSQL
  }
});

async function testConnection() {
  console.log('Testing database connection...');
  console.log(`Database URL format: ${databaseUrl.split('@')[0].replace(/:.+@/, ':****@')}@${databaseUrl.split('@')[1]}`);
  
  try {
    const client = await pool.connect();
    
    // Test basic connection
    const result = await client.query('SELECT NOW() as current_time');
    console.log('✅ Connection successful!');
    console.log('Current database time:', result.rows[0].current_time);
    
    // List all tables in the database
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    console.log('\nAvailable tables:');
    if (tablesResult.rows.length === 0) {
      console.log('No tables found. You may need to create your schema.');
    } else {
      tablesResult.rows.forEach(row => {
        console.log(`- ${row.table_name}`);
      });
    }
    
    client.release();
  } catch (err) {
    console.error('❌ Connection error:', err.message);
    console.error('Error details:', err);
  } finally {
    await pool.end();
  }
}

testConnection();