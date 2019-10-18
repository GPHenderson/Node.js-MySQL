var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Username
    user: "root",

    // Password
    password: "Fullstack2019",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection" + connection.threadId);

});