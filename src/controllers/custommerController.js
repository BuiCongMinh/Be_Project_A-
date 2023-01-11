const { uploadSingleFile } = require('../services/fileServices')
const { deleteManyCustomers, deleteACustomer, updateCustomer, getAllCustomer, createCustommer, createManyCustomer } = require('../services/custommerServices')

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

        let customerData = { name, address, phone, email, description, image: urlImage }
        let customer = await createCustommer(customerData)
        // console.log(">>>customer: ", customer);

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    postManyCustomers: async (req, res) => {
        let customer = await createManyCustomer(req.body.customers)

        if (customer) {
            return res.status(200).json({
                EC: 0,
                data: customer
            })
        } else {
            return res.status(400).json({
                EC: -1,
                data: customer
            })
        }

    },

    getCustomers: async (req, res) => {
        console.log(">>>req.query:", req.query);
        let limit = req.query.limit
        let page = req.query.page
        let customer = null

        if (limit && page) {
            customer = await getAllCustomer(limit, page)
            
            console.log(">>>customer:", customer);
        }
        else{
            customer = await getAllCustomer()
        }
        
        return res.status(200).json({
            EC: 0,
            data: customer
        })

    },

    putCustomers: async (req, res) => {
        let customer = await updateCustomer(req.body, req.params)

        if (customer) {
            return res.status(200).json({
                EC: 0,
                data: customer
            })
        } else {
            return res.status(400).json({
                EC: -1,
                data: customer
            })
        }
    },

    deleteACustomer: async (req, res) => {
        let customer = await deleteACustomer(req.body)
        // console.log(">>>customer:", customer);

        if (customer.EC === -1) {
            return res.json({
                EC: -1,
                data: customer.error
            })
        }


        return res.status(200).json({
            EC: 0,
            data: customer
        })


    },

    deleteArrayCustomers: async (req, res) => {
        let customer = await deleteManyCustomers(req.body.arrayIdCustomer)
        // console.log(">>>customer:", customer);

        if (customer.EC === -1) {
            return res.json({
                EC: -1,
                data: customer.error
            })
        }

        return res.status(200).json({
            EC: 0,
            data: customer
        })


    }
}
