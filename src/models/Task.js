const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const projectSchema = new mongoose.Schema({
    nameProjcet: {type: String, required: true},
    startDate: String,
    endDate: String,
    description: String
})

const taskSchema = new mongoose.Schema({
    nameTask : {type: String, required: true},
    userInfor: userSchema,
    description: String,
    projectInfor: projectSchema,
    startDate: String,
    endDate: String,
    status: {type: String, default: 'true'},

},{collection: 'task'},
{timestamps: true,}) // createdAt, updatedAt

taskSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // setup thư viện mongoose delete

const Task = mongoose.model('task',taskSchema)

module.exports = Task
