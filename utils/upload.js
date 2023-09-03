const multer = require('multer');
const path = require('path');

const imageFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif|svg/;

  //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // check mime type property
  const mimeType = fileTypes.test(file.mimetype);
  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb('Please upload only images.', false);
  }
};
// store to uploads folder
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/public/assets/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

var uploadFile = multer({
  storage: storage,
  fileFilter: imageFilter,
  // filefilter property
  limits: { fileSize: 1000000 },
});

module.exports = uploadFile;
