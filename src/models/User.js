const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    name:String,
    city: String,
});


const User = mongoose.model('user',userSchema);

// const cat = new Kitten({ name: 'MinhvnvnTestModal' });
// cat.save()

module.exports = User;