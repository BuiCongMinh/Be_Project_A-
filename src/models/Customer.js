const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    phone: Number,
    email: String,
    image: String,
    description: String

}, 
{ timestamps: true },  // tạo thêm các trường {createAt:(hiện thị thời gian tạo data),updateAt:(hiện thị thời gian update data)}
{ collection: 'customer' } 
);


const Customer = mongoose.model('customer', customerSchema);

// const cat = new Kitten({ name: 'MinhvnvnTestModal' });
// cat.save()

module.exports = Customer;