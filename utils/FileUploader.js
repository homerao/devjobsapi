const multer = require('multer')
const path = require('path')


const storageAvatars = multer.diskStorage({

    destination: (req, file, cb) => {
    cb(null,path.join('uploads/avatars'))
    },
    filename: (req, file, cb) => {
     cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }

})


module.exports = storageAvatars