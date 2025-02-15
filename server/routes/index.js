const express = require('express');
const router = express.Router();

// Define your API routes here
router.get('/example', (req, res) => {
  res.json({ message: 'Example API route' });
});

module.exports = router;