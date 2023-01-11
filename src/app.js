require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 3333
const hostName = process.env.HOST_NAME
const webRouter = require('./routes/web')
const api = require('./routes/api')
const connection = require('./config/database')
const fileUpload = require('express-fileupload');


//config file upload ! (nên khai báo trên phần khai báo router)
app.use(fileUpload())

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config teamplate engine ! 
configViewEngine(app)


// khai báo router
app.use('/', webRouter);
app.use('/api/',api);        // lưu ý là trước mỗi funtion vo danh phải thêm dấu ; (phải ; ở cuối mỗi câu lệnh trước thì sau đó mới viết được funtion vô danh)


(async () => {
    try {
        await connection();
        app.listen(port, hostName, () => { console.log(`http://${hostName}:${port}`) }) //chú ý ko được thêm dấu ; 
    } catch (error) {
        console.log('server eror', error);
    }

})()
