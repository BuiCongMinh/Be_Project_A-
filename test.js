require('dotenv').config()
const mongoose = require('mongoose')
const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
}
mongoose.connect(process.env.DB_HOST, options)
.then(data=> console.log('conect success! '))

const ParentSchema = new mongoose.Schema({
    name: String,
    child: [
        {
            name: {type: String , required: true},
            addres: Number
        }
    ]
})

const Parent = mongoose.model('parent', ParentSchema)

Parent.create({
    name:'minh',
    child:[
        {name: 'mai', addres:23},
        {name: 'my', addres:23},
        {name: 'hưng', addres:23},
    ]
})
