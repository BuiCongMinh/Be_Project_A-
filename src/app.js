require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 3333
const hostName = process.env.HOST_NAME
const webRouter = require('./routes/web')
// const connection = require('./config/database')

// config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// config teamplate engine ! 
configViewEngine(app)

// khai báo router
app.use('/',webRouter)

// connection.query(
//     'SELECT * FROM Users u',
//     function(err, results, fields){       // ko cần quan tâm phần fields chỉ cần quan tâm phần results
//         console.log(">>>results=",results);
//         // console.log(">>> fields=",fields);
//     }
// )

app.listen(port, hostName, () => { console.log(`http://${hostName}:${port}`) }) //chú ý ko được thêm dấu ; 
