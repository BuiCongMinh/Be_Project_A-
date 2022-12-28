require('dotenv').config();

const mysql = require('mysql2/promise')


// ======== Đây là connection sql (đây là kiến thức cần xem lại !)=========
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,  //default:3306
//     user: process.env.DB_USER, //default: empty (đăng nhập ko cần password)
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })
    

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  //default:3306
    user: process.env.DB_USER, //default: empty (đăng nhập ko cần password)
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})



module.exports = connection
