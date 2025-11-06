const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get mock news data
app.get('/api/news', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'news.json'));
});

// Root route → serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`📰 Newsfeed app running on http://localhost:${port}`);
});
