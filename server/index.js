const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Use the routes defined in the routes folder
app.use('/api', routes);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});