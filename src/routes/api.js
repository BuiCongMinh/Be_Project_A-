const router = require('express').Router()
const {getUsersApi,postUsersApi,putUsersApi,deleteUserApi} = require('../controllers/apiHomeController')

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

module.exports = router 
