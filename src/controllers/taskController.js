const { patchATask,deleteATask,getTask,createTask } = require('../services/taskService')

module.exports = {
    createTaskController: async (req, res) => {
        let result = await createTask(req.body)

        return res.status(200).json({
            EC: 0,
            result
        })
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
    deleteATaskController: async (req,res) =>{
        let data = await deleteATask(req.body)
        return res.status(200).json({
            EC: 0,
            data
        })
    }
    ,
    updateATaskController: async (req,res)=>{
        let data = await patchATask(req.body)
        return res.status(200).json({
            EC: 0,
            data
        })
    }
}

