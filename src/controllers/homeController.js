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

module.exports = { getHomePage, getABC, getHoiDanIT }
