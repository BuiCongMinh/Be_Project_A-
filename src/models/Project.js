const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const custommerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
})

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    startDate: String,
    endDate: String,
    description: String,
    taskId: [{ type: mongoose.ObjectId, ref: 'task' }],
    userInfor: [{ type: mongoose.ObjectId, ref: 'user' }],
    leader: userSchema,
    custommer: custommerSchema

}, { collection: 'project' }, { timestamps: true })


projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // setup thư viện mongoose delete

const Project = mongoose.model('project', projectSchema)

module.exports = Project
