// index.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 8080;

// PostgreSQL database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Example route
app.get('/', (req, res) => {
  res.send('Smart Study Matcher API is live!');
});

// Example to fetch data
app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
