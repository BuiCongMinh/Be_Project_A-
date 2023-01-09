const router = require('express').Router()
const {postMutilFiles,postFilesApi,getUsersApi,postUsersApi,putUsersApi,deleteUserApi} = require('../controllers/apiHomeController')
const {postCustomers} = require('../controllers/custommerController')

router.get('/', (req,res)=>{
    console.log(12);
    res.send('hello this is api')
})
router.get('/abc', (req,res)=>{
    res.status(201).json({data:'data succes'})
})


router.get('/user', getUsersApi)
router.post('/user',postUsersApi)
router.put('/user',putUsersApi)
router.delete('/user',deleteUserApi)

router.post('/file',postFilesApi)
router.post('/files',postMutilFiles)

router.post('/customers',postCustomers)

module.exports = router 
