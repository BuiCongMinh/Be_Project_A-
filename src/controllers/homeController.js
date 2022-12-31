const connection = require('../config/database')
const { deleteUserById, getAllUser, getUserById, upDateUserById} = require('../services/CRUDService')


const getHomePage = async(req, res) => {
    // let ar = []
    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {       // ko cần quan tâm phần fields chỉ cần quan tâm phần results
    //         ar = results
    //         console.log(">>>results=", results);
    //         console.log('>>> ar = ',ar);

    //         res.json(ar)

    //     }
    // )

    let results = await getAllUser()

    // console.log('>>> results: ',results);

    return res.render('home.ejs',{listUser:results})
}

const getABC = (req, res) => {
    res.send('<h2>this is abc page </h2>')
}

const getHoiDanIT = (req, res) => {
    res.render('home')
}

const postCreateUser = async (req, res) => {
    // let { email, name, city } = req.body
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    // console.log('email = ', email, ',name= ', name, ',city = ', city);


    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) Values (?,?,?)`,
        [email, name, city]
    )

    // console.log('>>> results: ', results);

    res.send('this is create user !!!')

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async(req,res)=>{
    let userId = req.params.id
    let user = await getUserById(userId)
    res.render('edit.ejs',{data : user})
    
}

const postUpdateUser = async(req,res)=>{
     // let { email, name, city } = req.body
     let userId = req.body.userId
     let email = req.body.email
     let name = req.body.name
     let city = req.body.city
    //  console.log('>>> email = ', email, ',name= ', name, ',city = ', city , 'UserId: ',userId);
 
    await upDateUserById(userId,email,name,city)
    res.redirect('/')
}

const postDeleteUser =async (req,res)=>{
    let userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs',{data:user})
}

const postHandleRemoveUser = async (req,res)=>{
    // console.log(83, req.body);
    await deleteUserById(req.body.userId)
    // console.log(results);
    res.redirect('/')
}

module.exports = { postHandleRemoveUser, getHomePage, getABC, getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser}
