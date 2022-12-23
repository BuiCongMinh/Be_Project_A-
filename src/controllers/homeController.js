const getHomePage= (req,res)=>{
    res.send('<h1>this is home Page</h1>')
}

const getABC = (req,res)=>{
    res.send('<h2>this is abc page </h2>')
}

const getHoiDanIT = (req,res)=>{
    res.render('home')
}

module.exports = {getHomePage, getABC, getHoiDanIT }
