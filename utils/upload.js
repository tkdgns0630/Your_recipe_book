const multer  = require('multer');
const imageFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|svg/;

    //check extension names
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  
    const mimeType = fileTypes.test(file.mimetype);
  
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  };
  
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "/public/assets/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    },
  });
  
  var uploadFile = multer({ storage: storage, fileFilter: imageFilter,limits: { fileSize: 1000000 } });
  
module.exports = uploadFile;
