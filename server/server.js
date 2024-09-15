// define constants
const express = require('express');
const gift = require('./gift.js');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;
/*
const connection = mysql.createConnection({
  host:      process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
  port     : process.env.DB_PORT,
});

connection.connect(function(err) {
  if (err) console.log(err.message) ;
  console.log("Successfully connected");
});
*/

// Setup an endpoint
app.get('/api/', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Gifts endpoint
app.use('/api/gift', gift)

// Setup App Listening
app.listen(port, () => console.log(`Listening on port ${port}`));
