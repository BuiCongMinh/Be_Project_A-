const path = require('path')
const express = require('express')
function configViewEngine (app)  {

    app.set('views', path.join(__dirname, ('../views')))  // phải có đường dẫn tuyệt đối !!!!
    app.set('view engine', 'ejs')

    // config static files: image/css/js
    app.use(express.static(path.join(__dirname, '../publics')))
}

module.exports = configViewEngine
