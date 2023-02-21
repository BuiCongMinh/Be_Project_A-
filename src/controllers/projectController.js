const { updateProjectService, deleteProjectService, createProjectService, getAllProjectService } = require('../services/porject.Service')
const Joi = require('joi')


const createProject = async (req, res) => {

    const schema = Joi.object({
        type: Joi.string().required(),
        projectId: Joi.string().required()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,60}$')).required(),
        taskArr: Joi.array().items(Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,60}$')).required()),

    })

    let { error } = schema.validate(req.body, { abortEarly: false })
    // console.log('>>> check requed:', newRequest);
    if (error) {
        return res.json('đã kết nối !')
    }



    const data = await createProjectService(req.body)
    // console.log(">>>data:");
    res.json(data)

}

const getAllProjectController = async (req, res) => {
    let data = await getAllProjectService(req.query)

    return res.status(200).json(
        {
            EC: 0,
            data: data
        }
    )

}

const deleteProjectController = async (req, res) => {
    const data = await deleteProjectService(req.body)
    return res.status(200).json(
        {
            EC: 0,
            data
        }
    )
}

const updateProjectController = async (req, res) => {
    const data = await updateProjectService(req.body)
    return res.status(200).json({
        EC: 0,
        data
    })
}


module.exports = { updateProjectController, createProject, getAllProjectController, deleteProjectController }
