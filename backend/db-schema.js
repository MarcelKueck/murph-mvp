const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function getSchemaInfo() {
  try {
    const client = await pool.connect();
    
    // Query to get detailed schema information
    const schemaQuery = `
      SELECT 
        t.table_name, 
        c.column_name, 
        c.data_type,
        c.column_default,
        c.is_nullable,
        c.character_maximum_length,
        c.udt_name,
        c.ordinal_position
      FROM 
        information_schema.tables t
      JOIN 
        information_schema.columns c 
        ON t.table_name = c.table_name
      WHERE 
        t.table_schema = 'public' AND
        c.table_schema = 'public'
      ORDER BY 
        t.table_name, 
        c.ordinal_position;
    `;
    
    const result = await client.query(schemaQuery);
    
    // Generate Markdown output
    let markdown = "# Railway Database Schema\n\n";
    let currentTable = "";
    
    result.rows.forEach(row => {
      if (row.table_name !== currentTable) {
        if (currentTable !== "") {
          markdown += "\n";
        }
        currentTable = row.table_name;
        markdown += `## Table: ${currentTable}\n\n`;
        markdown += "| Column | Type | Default | Nullable | Description |\n";
        markdown += "|--------|------|---------|----------|-------------|\n";
      }
      
      const default_value = row.column_default === null ? 'NULL' : row.column_default;
      const nullable = row.is_nullable === 'YES' ? 'YES' : 'NO';
      let type = row.data_type;
      
      if (row.character_maximum_length !== null) {
        type += `(${row.character_maximum_length})`;
      }
      
      markdown += `| ${row.column_name} | ${type} | ${default_value} | ${nullable} | |\n`;
    });
    
    console.log(markdown);
    
    client.release();
  } catch (err) {
    console.error('Error fetching schema information:', err.message);
  } finally {
    await pool.end();
  }
}

getSchemaInfo();
