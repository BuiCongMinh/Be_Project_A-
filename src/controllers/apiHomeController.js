const path = require('path')
const User = require('../models/User')
const { uploadSingleFile, uploadMultiFiles } = require('../services/fileServices')


const getUsersApi = async (req, res) => {

    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })

    // console.log('>>> results: ',results);
}

const postUsersApi = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    // console.log('email = ', email, ',name= ', name, ',city = ', city);

    const results = await User.create({ email, name, city })

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const putUsersApi = async (req, res) => {
    let userId = req.body.userId
    //  let email = req.body.email
    //  let name = req.body.name
    //  let city = req.body.city

    //  console.log('>>> email = ', email, ',name= ', name, ',city = ', city , 'UserId: ',userId);

    // await upDateUserById(userId,email,name,city)

    const results = await User.updateOne({ _id: userId }, req.body)
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const deleteUserApi = async (req, res) => {

    const result = await User.deleteOne({ _id: req.body.userId })

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const postFilesApi = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    console.log(">>>req.files.image:", req.files.image);

    const result =  await uploadSingleFile(req.files.image)
    console.log('>>>result: ', result);

    return res.json({
        EC: 0 ,
        data: result
    })


}

const postMutilFiles = async (req,res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    
    if(Array.isArray(req.files.image)){
        let result = await uploadMultiFiles(req.files.image)
        return res.status(200).json({
            EC:0,
            data: result
        })
    }else{
        return await postFilesApi(req,res)
    }


}



module.exports = { postMutilFiles,postFilesApi, getUsersApi, postUsersApi, putUsersApi, deleteUserApi }
