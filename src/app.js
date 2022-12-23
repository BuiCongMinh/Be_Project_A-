require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 3333
const hostName = process.env.HOST_NAME
const webRouter = require('./routes/web')

// config teamplate engine ! 
configViewEngine(app)

// khai báo router
app.use('/',webRouter)

app.listen(port, hostName, () => { console.log(`http://${hostName}:${port}`) }) //chú ý ko được thêm dấu ; 
