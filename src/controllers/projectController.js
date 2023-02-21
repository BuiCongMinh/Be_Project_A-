const { updateProjectService ,deleteProjectService,createProjectService, getAllProjectService } = require('../services/porject.Service')

const createProject = async (req, res) => {

    // console.log(">>>req.body: ",req.body);

    const data = await createProjectService(req.body)
    // console.log(">>>data:");
    res.json(data)

}

const getAllProjectController = async (req, res) => {
    let data = await getAllProjectService(req.query)

    return res.status(200).json(
        {
            EC:0,
            data : data
        }
    )

}

const deleteProjectController = async (req,res)=>{
    const data = await deleteProjectService(req.body)
    return  res.status(200).json(
        {
            EC: 0,
            data
        }
    )
}

const updateProjectController = async (req,res)=>{
    const data = await updateProjectService(req.body)
    return res.status(200).json({
        EC : 0,
        data
    })
} 


module.exports = { updateProjectController,createProject, getAllProjectController,deleteProjectController }
