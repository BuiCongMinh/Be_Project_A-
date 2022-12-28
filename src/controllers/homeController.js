const connection = require('../config/database')


const getHomePage = (req, res) => {
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
    return res.render('home.ejs')
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


const getCreateUser = (req, res) => {
    res.render('create.ejs')
}


module.exports = { getHomePage, getABC, getHoiDanIT, postCreateUser, getCreateUser }
