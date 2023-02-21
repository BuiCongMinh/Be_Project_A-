const Project = require('../models/Project')
const aqp = require('api-query-params')

const createProjectService = async (body) => {
    try {
        // console.log('>>> body:', body);

        // tạo một projet rỗng người dùng 
        if (body.type === 'EMPTY-PROJECT') {
            const data = await Project.create(body)
            return { EC: 0, status: 200, data }
        }

        // thêm người dùng !
        if (body.type === 'ADD-USERS') {
            // console.log('>>>check body:', body);

            const myProject = await Project.findById(body.projectID)
            // console.log(">>> myProject:", myProject);

            for (let i = 0; i < body.userArray.length; i++) {
                if (myProject.userInfor.indexOf(body.userArray[i]) === -1) {
                    myProject.userInfor.push(body.userArray[i])
                }
            }

            // console.log(">>> myProject:", myProject);
            const data = await myProject.save()

            return { EC: 0, status: 200, mes: 'ok add users!', data }
        }

        // xoá người dùng !
        if (body.type === "REMOVE-USER") {
            const myProject = await Project.findById(body.projectID)

            if (body.userArray.length === 0) {
                throw 'bạn ko được để trống userArray !'
            }


            for (let i = 0; i < body.userArray.length; i++) {
                if (myProject.userInfor.indexOf(body.userArray[i]) === -1) {
                    throw 'ko có user này trong project !'
                }
                myProject.userInfor.remove(body.userArray[i])
            }

            // console.log(">>> myProject:", myProject);
            const data = await myProject.save()

            return { EC: 0, status: 200, mes: 'ok add users!', data }

        }

        // add task vào project 
        if (body.type === "ADD-TASKS"){
            let myProject = await Project.findById(body.projectId).exec();
            // console.log('hêlo',myProject);
            for (let i = 0; i < body.taskArr.length; i++) {
                if (myProject.taskId.indexOf(body.taskArr[i]) === -1) {
                    myProject.taskId.push(body.taskArr[i])
                }
               
            }
            let newRsult  = await myProject.save();
            return newRsult;
        }

        //remove task ra project
        if(body.type === 'REMOVE-TASK'){
            const myProject = await Project.findById(body.projectID)

            if (body.taskArr.length === 0) {
                throw 'bạn ko được để trống userArray !'
            }


            for (let i = 0; i < body.taskArr.length; i++) {
                myProject.userInfor.remove(body.taskArr[i])
                
            }

            // console.log(">>> myProject:", myProject);
            const data = await myProject.save()

            return { EC: 0, status: 200, mes: 'ok add users!', data }
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -1,
            status: 500,
            mesage: 'server eror!',
            error
        }
    }
}


const getAllProjectService = async (queryString) => {
    // console.log('>>> queryString: ',queryString);
    const page = queryString.page
    const { filter, limit, population } = aqp(queryString)

    console.log(">>> before: ", filter);
    delete filter.page;
    console.log(">>> after: ", filter);

    let offset = (page - 1) * limit;

    let result = await Project.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();

    return result
}

const deleteProjectService = async (body) => {
    const result = Project.deleteById(body.id)
    // console.log(">>> result:", result);
    return result
}

const updateProjectService = async (body) => {
    const result = Project.updateOne({ _id: body.id }, body)
    return result
}


module.exports = { updateProjectService, deleteProjectService, createProjectService, getAllProjectService }
