// define constants
const express = require('express');
const gift = require('./gift');
const app = express();
const port = process.env.PORT || 5000;

// Gifts endpoint
app.use('/api', gift);

// Setup App Listening
app.listen(port, () => console.log(`Listening on port ${port}`));
