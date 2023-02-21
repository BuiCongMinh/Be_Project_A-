const Task = require('../models/Task')
const aqp = require('api-query-params')

module.exports = {
    createTask: async(body)=>{
        // console.log('>>>check body:', body);
        let result = null
        if(body.type === 'EMPTY-TAKS'){
            result = await Task.create({
                nameTask: body.name,
                description:body.description,
                status: body.status,
                startDate: body.startDate,
                endDate: body.endDate
            })
            // console.log('>>> checkResult: ', result);
            return newRsult = await result.save()
        }

        throw 'this is wrong type'
    }
    ,
    getTask : async (query)=>{
        const  page = query.page
        const {filter , limit , population} = aqp(query)
        delete filter.page

        let offset = (page-1) * limit ;
        
        let result = await Task.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec() ;

        return result ;
    }
    ,
    deleteATask: async (body) =>{
        let result = await Task.deleteById(body.id)
        return result 
    }
    ,
    patchATask: async (body)=>{
        // console.log(body);
        let result = await Task.updateOne({_id: body.id},{...body})
        
        // console.log(result);
        return result
    }
    
}
