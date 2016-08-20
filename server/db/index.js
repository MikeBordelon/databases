var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  database: 'chat',
  password: '',
  port: '3000'
});

con.connect(function(err) {
  if (err) {
    console.log('error connecting' + err);
    return;
  }
  console.log('connection established');
});

con.end(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connection ended');
}); 

exports.con = con;