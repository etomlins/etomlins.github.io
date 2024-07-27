const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/api/tweets', (req, res) => {
  res.json([]);
});

app.post('/api/tweet', (req, res) => {
  res.status(201).json({ message: 'Tweet posted' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
