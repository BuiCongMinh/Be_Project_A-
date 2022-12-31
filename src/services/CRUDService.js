const connection = require("../config/database")

async function getAllUser(){
    let [results,fields] = await connection.query(`SELECT * FROM Users u `)
    return results
}

async function getUserById(userId){
    let [results,fields] = await connection.query(`SELECT * FROM Users u WHERE id = ?`,[userId])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const upDateUserById = async(userId,email,name,city)=> {
    const  [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ? , name = ? , city = ?
        WHERE id = ?` ,
        [email, name, city, userId]
    )
    
    // console.log('>>>result:', results);
}

const deleteUserById = async(id)=>{
    let [results,fields] = await connection.query(
        `DELETE FROM Users 
        WHERE id = ?`
        ,[id]
    )
    return results
}

module.exports = { deleteUserById, getAllUser, getUserById ,upDateUserById }
