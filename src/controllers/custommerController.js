const { uploadSingleFile } = require('../services/fileServices')
const { createCustommer } = require('../services/custommerServices')
module.exports = {
    postCustomers: async (req, res) => {
        let { name, address, phone, email, description } = req.body
        // console.log(">>>req.body," , req.body);
        // console.log(">>>name: ",name);
        // console.log(">>>image: ", req.files);

        // {
        //     name: { type: String, require: true },
        //     address: { type: String, require: true },
        //     phone: Number,
        //     email: String,
        //     image: String,
        //     description: String

        // }, 

        let urlImage = ''
        if (!req.files || Object.keys(req.files).length === 0) {
            // Do notthing!
        } else {
            let result = await uploadSingleFile(req.files.image)
            // console.log(">>>result:", result);
            urlImage = result.path
        }

        let customerData={name, address, phone, email, description, image: urlImage}
        let customer = await createCustommer(customerData)
        // console.log(">>>customer: ", customer);

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    }
}
