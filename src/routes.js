/*
    Following the tutorial found here:
    https://dev.to/saulojoab/how-to-get-data-from-an-mysql-database-in-react-native-53a4
    To get information from the database, we will need to write fetch calls
    (This is seen as the last step in the given article).
    As of right now, if everything is running, going to localhost:3000/illnesses
    just pours out all the contents of the illneses table
*/

// Dependencies for the database connection
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Establish connection with the database
const connection = mysql.createPool({
    host     : 'batadase.ce9imn44ahvs.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'watermelons1!',
    database : 'illnesses'
});

// Start the app
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/illnesses', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM symptoms', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/illnesses so you can see the data.');
});
