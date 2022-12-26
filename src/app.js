require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 3333
const hostName = process.env.HOST_NAME
const webRouter = require('./routes/web')
const mysql = require('mysql2')

// config teamplate engine ! 
configViewEngine(app)

// khai báo router
app.use('/',webRouter)

const connection = mysql.createConnection({
    host:'localhost',
    port:3307,  //default:3306
    user: 'root', //default: empty (đăng nhập ko cần password)
    password:'123456',
    database:'hoidanit'
})

connection.query(
    'SELECT * FROM Users u',
    function(err, results, fields){
        console.log(">>>results=",results);
        console.log(">>> fields=",fields);
    }
)

app.listen(port, hostName, () => { console.log(`http://${hostName}:${port}`) }) //chú ý ko được thêm dấu ; 
