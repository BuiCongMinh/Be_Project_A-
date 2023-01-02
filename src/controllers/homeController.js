const connection = require('../config/database')
const User = require('../models/User')
const { deleteUserById, getAllUser, getUserById, upDateUserById} = require('../services/CRUDService')


const getHomePage = async(req, res) => {

    let results = await User.find({});

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



    await User.create({email,name,city})
    // const [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city) Values (?,?,?)`,
    //     [email, name, city]
    // )

    // console.log('>>> results: ', results);

    // res.send('this is create user !!!')
    res.redirect('/')  //redirect là trở về địa chỉ router ('/')

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async(req,res)=>{
    let userId = req.params.id
    // let user = await getUserById(userId)
    let user =  await User.findById(userId)
    // console.log('user update! ',user);
    res.render('edit.ejs',{data : user})
    
}

const postUpdateUser = async(req,res)=>{
     // let { email, name, city } = req.body
     let userId = req.body.userId
     let email = req.body.email
     let name = req.body.name
     let city = req.body.city
    //  console.log('>>> email = ', email, ',name= ', name, ',city = ', city , 'UserId: ',userId);
 
    // await upDateUserById(userId,email,name,city)
    await User.updateOne({_id: userId},{email,name,city})
    res.redirect('/')
}

const postDeleteUser =async (req,res)=>{
    let userId = req.params.id
    // let user = await getUserById(userId)s
    let user = await User.findById(userId) 
    res.render('delete.ejs',{data:user})
}

const postHandleRemoveUser = async (req,res)=>{
    // console.log(83, req.body);
    // await deleteUserById(req.body.userId)
    await User.deleteOne({_id: req.body.userId})
    // console.log(results);
    res.redirect('/')
}


module.exports = { postHandleRemoveUser, getHomePage, getABC, getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser}
