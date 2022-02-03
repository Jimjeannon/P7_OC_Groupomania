const mysql = require("mysql")

// Connection server mysql

const database = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : "groupomania"
  });
  
 database.connect(function(err) {
    if (err) throw err;
    console.log("Server ok !");
  });

  module.exports.getDB = () => {
    return database
}

