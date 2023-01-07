const path = require('path')
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

const postFilesApi = (req,res)=>{
 
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        let image = req.files.image;
        let uploadPath = path.join(__dirname,`../publics/images/${image.name}`);
        console.log('>>> uploadPath: ', uploadPath);

        image.mv(uploadPath, function(err) {
            if (err)
              return res.status(500).send(err);
        
            res.status(200).json('File uploaded success');
        });

   
}


module.exports = { postFilesApi,getUsersApi, postUsersApi, putUsersApi, deleteUserApi }
