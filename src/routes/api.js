const router = require('express').Router()

const {postMutilFiles,postFilesApi,getUsersApi,postUsersApi,putUsersApi,deleteUserApi} = require('../controllers/apiHomeController')
const {deleteArrayCustomers,deleteACustomer,putCustomers,getCustomers,postCustomers,postManyCustomers} = require('../controllers/custommerController')
const {updateProjectController,createProject,getAllProjectController,deleteProjectController} = require('../controllers/projectController')
const {updateATaskController,deleteATaskController,getAllTaskController,createTaskController} = require('../controllers/taskController')

router.get('/', (req,res)=>{
    console.log(12);
    res.send('hello this is api')
})
router.get('/abc', (req,res)=>{
    res.status(201).json({data:'data succes'})
})

// api user
router.get('/user', getUsersApi)
router.post('/user',postUsersApi)
router.put('/user',putUsersApi)
router.delete('/user',deleteUserApi)

router.post('/file',postFilesApi)
router.post('/files',postMutilFiles)

// api customer 
router.post('/customers',postCustomers)
router.post('/customers-many',postManyCustomers)
router.get('/customers',getCustomers)
router.put('/customers/:id',putCustomers)
router.delete('/customers',deleteACustomer)
router.delete('/customers-many',deleteArrayCustomers)

// api Project
router.post('/project', createProject)
router.get('/project', getAllProjectController)
router.patch('/project',updateProjectController)
router.delete('/project',deleteProjectController)

//api Task
router.post('/task', createTaskController)
router.get('/task',getAllTaskController)
router.delete('/task',deleteATaskController)
router.patch('/task',updateATaskController)
 
module.exports = router 
