const mysql = require('mysql');
const myConnection = require('express-myconnection');



const conn = myConnection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "tiendavirtual"
},"single");


if (conn) {
    console.log("DB is Connect");
}

module.exports = conn;