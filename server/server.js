const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API Routes
app.use('/api', tweetRoutes);

// Serve Static Files
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Fallback to serve React app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
