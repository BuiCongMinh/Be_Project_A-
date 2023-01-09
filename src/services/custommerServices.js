const Customer = require('../models/Customer')

const createCustommer = async (customerData)=>{
    // console.log(">>>customerData: ", customerData);

    try {
        // console.log(">>>data:", data);
        let result =  await Customer.create(customerData)
        return(result) 
    } catch (error) {
        console.log('>>>error:', error);
        return null
    }
}

module.exports={createCustommer}
