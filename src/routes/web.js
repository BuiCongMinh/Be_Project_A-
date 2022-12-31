const router = require('express').Router()
const {postHandleRemoveUser, getHomePage, getABC, getHoiDanIT, postCreateUser, getCreatePage,getUpdatePage, postUpdateUser ,postDeleteUser } = require('../controllers/homeController')

router.get('/', getHomePage)

router.get('/abc', getABC)

router.get('/hoidanit', getHoiDanIT)

router.get('/create-user',getCreatePage)
router.get('/update-user/:id',getUpdatePage)

router.post('/create-user',postCreateUser)
router.post('/update-user',postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)
module.exports = router
