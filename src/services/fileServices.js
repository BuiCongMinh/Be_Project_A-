const path = require('path')


const uploadSingleFile = async (filesUpLoad) => {
    // console.log('>>>filesUpLoad: ',filesUpLoad);
    let uploadPath = path.join(__dirname, `../publics/images/filesUpload`);
    // console.log('>>>uploadPath :',uploadPath);

    let extName = path.extname(filesUpLoad.name)
    // console.log('>>>extName: ', extName);

    let baseName = path.basename(filesUpLoad.name, extName).split(' ').join('')
    // console.log('>>>baseName: ', baseName);

    // console.log('>>>Date.now:', Date.now());
    let fullName = `${baseName}-${Date.now()}${extName}`
    let finalPath = `${uploadPath}/${fullName}`
    // console.log('>>>finalPath: ', finalPath); 
    try {
        await filesUpLoad.mv(finalPath)
        return {
            status: 'succes!',
            path: fullName,
            error: null
        }
    } catch (error) {
        console.log('>>> check error:', error);
        return {
            status: 'false',
            path: null,
            error: JSON.stringify(error)
        }
    }
}

const uploadMultiFiles = async (arrayUploadFiles) => {
    // console.log('>>>arrayUploadFiles:', arrayUploadFiles);

    let uploadPath = path.join(__dirname, `../publics/images/filesMutiUpload`);
    // console.log('>>>uploadPath :',uploadPath);

    let resultAr = [];
    let count = 0;

    for (let i = 0; i < arrayUploadFiles.length; i++) {
        let extName = path.extname(arrayUploadFiles[i].name)
        // console.log('>>>extName: ', extName);

        let baseName = path.basename(arrayUploadFiles[i].name, extName).split(' ').join('')
        // console.log('>>>baseName: ', baseName);

        // console.log('>>>Date.now:', Date.now());
        let fullName = `${baseName}-${Date.now()}${extName}`
        let finalPath = `${uploadPath}/${fullName}`
        // console.log('>>>finalPath: ', finalPath);
        // console.log('>>>fullName:', fullName);

        try {
            await arrayUploadFiles[i].mv(finalPath)
            resultAr.push({
                status: 'succes!',
                path: fullName,
                fileName: arrayUploadFiles[i].name,
                error: null
            })
            count++
        }
        catch (error) {
            resultAr.push({
                status: 'false',
                path: null,
                fileName: arrayUploadFiles[i].name,
                error: JSON.stringify(error)
            })
        }
    }

    return ({
        number: count,
        result: resultAr
    })
}

module.exports = { uploadSingleFile, uploadMultiFiles }
