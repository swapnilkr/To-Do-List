// req the library
const mongoose = require('mongoose');

// connect to databse
mongoose.connect('mongodb://localhost/todo_list_db');

// acquire the connection (to check if its successful)
const db=mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running then print the message
db.once('open',function()
{
    console.log('Successfully connected to the database');
});

