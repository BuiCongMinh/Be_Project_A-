const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3333
const hostName = process.env.HOST_NAME

// config teamplate engine ! 
app.set('views', path.join(__dirname, ('views')))  // phải có đường dẫn tuyệt đối !!!!
app.set('view engine', 'ejs')

// khai báo route 
app.get('/', (req, res) => {
    res.send('hello')
})
app.get('/abc', (req, res) => {
    res.send('<h1>xin chào hỏi Bùi Công Minh</h1>')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(port, hostName, () => {console.log(`http://${hostName}:${port}`)}) //chú ý ko được thêm dấu ; 
