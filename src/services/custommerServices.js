const Customer = require('../models/Customer')
const aqp = require('api-query-params')


const createCustommer = async (customerData) => {
    // console.log(">>>customerData: ", customerData);
    try {
        // console.log(">>>data:", data);
        let result = await Customer.create(customerData)
        return (result)
    } catch (error) {
        console.log('>>>error:', error);
        return null
    }
}

const createManyCustomer = async (array) => {
    try {
        let reuslt = await Customer.insertMany(array)
        return reuslt

    } catch (error) {
        console.log('>>>Server error:', error);
        return error
    }
}

const getAllCustomer = async (limit, page, name, queryString) => {
    try {
        // console.log(limit, page);
        let result = null
        if (limit && page) {
            let offset = (page - 1) * limit
            const { filter } = aqp(queryString);
            delete filter.page
   
            console.log(">>>filler: ", filter);
            result = await Customer.find(filter).skip(offset).limit(limit).exec() // gọi exec() sẽ đảm bảo đoạn code chạy đúng với async await 

        }
        else {
            result = await Customer.find({})
        }

        return result

    } catch (error) {
        console.log('>>>Server error:', error);
        return error
    }
}

const updateCustomer = async (body, params) => {
    try {
        // console.log(body, params);
        let result = await Customer.updateOne({ _id: params.id }, body)
        return result
    } catch (error) {
        console.log('>>>Server error:', error);
        return error
    }

}

const deleteACustomer = async (idCustomer) => {
    try {
        let result = await Customer.deleteById(idCustomer)
        return result
    } catch (error) {
        // console.log('>>>error:', error);
        return { error, EC: -1 }
    }

}

const deleteManyCustomers = async (arId) => {
    try {
        let result = await Customer.delete({ _id: { $in: arId } });
        return result
    } catch (error) {
        console.log('>>>error:', error);
        return { error, EC: -1 }
    }

}


module.exports = { deleteManyCustomers, deleteACustomer, updateCustomer, createCustommer, createManyCustomer, getAllCustomer }
