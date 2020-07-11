var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit : 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ambildirumah'
});

module.exports = db;