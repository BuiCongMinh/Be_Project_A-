const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete'); // thư viện giúp chỉ xoá data một cách tạm thời được thôi !

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: Number,
    email: String,
    image: String,
    description: String

},
    {
        timestamps: true,// tạo thêm các trường {createAt:(hiện thị thời gian tạo data),updateAt:(hiện thị thời gian update data)}
        statics: {
            findByName(name) {
                return this.find({ name: new RegExp(name, 'i') });
            },
            findByMinh(name) {
                return this.find({ name: new RegExp(name, 'i') });
            }
        }
    },
    { collection: 'customer' }
);


customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // setup thư viện mongoose delete

const Customer = mongoose.model('customer', customerSchema);

// const cat = new Kitten({ name: 'MinhvnvnTestModal' });
// cat.save()

module.exports = Customer;