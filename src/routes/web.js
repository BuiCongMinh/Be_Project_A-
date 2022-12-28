const router = require('express').Router()
const { getHomePage, getABC, getHoiDanIT, postCreateUser, getCreateUser } = require('../controllers/homeController')

router.get('/', getHomePage)

router.get('/abc', getABC)

router.get('/hoidanit', getHoiDanIT)

router.get('/create-user',getCreateUser)

router.post('/create-user', postCreateUser)

module.exports = router
