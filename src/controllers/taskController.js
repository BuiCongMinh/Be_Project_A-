const { patchATask, deleteATask, getTask, createTask } = require('../services/taskService')
const Joi = require('joi')

module.exports = {
    createTaskController: async (req, res) => {
        try {
            const schema = Joi.object({
                type: Joi.string().required(),
                name: Joi.string(),
                status:Joi.string(),
                description: Joi.string(),
                startDate: Joi.string(),
                endDate: Joi.string()
            })
    
            let { error } = schema.validate(req.body, { abortEarly: false })
            console.log(error);
            if (error) {
                return res.json({ mgs: error })
            }
            console.log(' >>> check body: ', req.body);
            let result = await createTask(req.body)
    
            return res.status(200).json({
                EC: 0,
                result
            })
            
        } catch (error) {
            console.log(error);
            res.json({error})
        }
        
    }

    ,
    getAllTaskController: async (req, res) => {
        let data = await getTask(req.query)
        return res.status(200).json({
            EC: 0,
            data
        })
    }
    ,
    deleteATaskController: async (req, res) => {
        let data = await deleteATask(req.body)
        return res.status(200).json({
            EC: 0,
            data
        })
    }
    ,
    updateATaskController: async (req, res) => {
        let data = await patchATask(req.body)
        return res.status(200).json({
            EC: 0,
            data
        })
    }
}

