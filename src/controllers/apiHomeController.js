const User = require('../models/User')

const getUsersApi = async(req, res) => {

    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })

    // console.log('>>> results: ',results);
}

const postUsersApi = async(req,res)=>{
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    // console.log('email = ', email, ',name= ', name, ',city = ', city);

    const results = await User.create({email,name,city})

    return res.status(200).json({
        errorCode: 0,
        data: results
    }) 
}

const putUsersApi = async(req,res)=>{
    let userId = req.body.userId
    //  let email = req.body.email
    //  let name = req.body.name
    //  let city = req.body.city

    //  console.log('>>> email = ', email, ',name= ', name, ',city = ', city , 'UserId: ',userId);
 
    // await upDateUserById(userId,email,name,city)

    const results = await User.updateOne({_id: userId},req.body)
    return res.status(200).json({
        errorCode: 0 ,
        data : results
    })
}

const deleteUserApi = async (req,res)=>{
   
    const result =  await User.deleteOne({_id: req.body.userId})

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}


module.exports = { getUsersApi, postUsersApi, putUsersApi, deleteUserApi }
