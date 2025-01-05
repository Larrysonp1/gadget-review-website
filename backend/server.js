const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, Gadget Review Website!');
});

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'postgresql://postgres:O5xLLCKKL21GPFwD@db.ftomomtxworgikrrjoko.supabase.co:5432/postgres';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b21vbXR4d29ya2lrcm9rb2suY3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MzIwMzgsImV4cCI6MjA0MjUwODAzOH0.8888888888888888888888888888888888888888888888888888888888888888';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Fetch data from a table
app.get('/phones', async (req, res) => {
  const { data, error } = await supabase.from('phones').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});